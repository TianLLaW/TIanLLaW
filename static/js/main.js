(function(obj) {
    var _debounce = function (func, threshold, execAsap) {  
        var timeout;  
        return function debounced () {  
            var obj = this, args = arguments;  
            function delayed () {  
                if (!execAsap)  
                func.apply(obj, args);  
                timeout = null;  
            };  
            if (timeout)  
                clearTimeout(timeout);  
            else if (execAsap)  
                func.apply(obj, args);  
            timeout = setTimeout(delayed, threshold || 100);  
        };  
    };

// 修复IE10及以下版本不支持dataset属性的问题，兼容transfer-dom.js中使用了dataset的问题
    var isIE = function(){ 
        return (window.navigator.userAgent.indexOf("MSIE")>=1);  
    }
    if (isIE() && window.HTMLElement) {
        if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
            Object.defineProperty(HTMLElement.prototype, 'dataset', {
                get: function() {
                    var attributes = this.attributes;
                    var name = [],
                        value = [];
                    var obj = {};
                    for (var i = 0; i < attributes.length; i++) {
                        if (attributes[i].nodeName.slice(0, 5) == 'data-') {
                            name.push(attributes[i].nodeName.slice(5));
                            value.push(attributes[i].nodeValue);
                        }
                    }
                    for (var j = 0; j < name.length; j++) {
                        obj[name[j]] = value[j];
                    }
                    return obj;
                }
            });
        }
    }
    try {
        var main = new Vue({
            el: '#app',
            template:'\
            <div id="cs_layout" class="layout">\
                <cs-header></cs-header>\
                <row>\
                    <cs-left id="cs_left" class="cs-left"></cs-left>\
                    <cs-main id="cs_main" class="cs-main">\
                        <cs-footer slot="footer"></cs-footer>\
                        <cs-breadcrumb slot="breadcrumb" slot-scope="props" :bc="props.breadcrumb"></cs-breadcrumb>\
                    </cs-main>\
                </row>\
            </div>',
            i18n:i18n,
            data:{
                globalConfig:globalConfig
            },
            created:function(){
                var _this = this;
                var applang=(navigator.language||navigator.browserLanguage).toLowerCase();
                this.$i18n.locale = applang || localStorage.getItem('lang') || globalConfig.defaultLang;
                if(localStorage.getItem('lang') == "ct"){
                    languages.auto = "自動檢測";
                }else if(localStorage.getItem('lang') == "cn"){
                    languages.auto = "自动检测";
                }else if(localStorage.getItem('lang') == "jp"){
                    languages.auto = "自動検出";
                }else if(localStorage.getItem('lang') == "ru"){
                    languages.auto = "автоматическое";
                }else{
                    languages.auto = "Auto";
                }
                uiPost.getInitConfig(function(data){
					var postVar = {};
                    if(data.webTitle == ""){
                        document.title='\u200E';
                    }else{
                        document.title = data.webTitle;
                    }
					if(data.cs==""){
                        _this.globalConfig.showLogo = false;
                    }else{
                         _this.globalConfig.showLogo = true;
                    }
					_this.globalConfig.copyRight = data.copyRight;
                    _this.globalConfig.showLanguage = data.showLanguage.split(",");       
                    _this.globalConfig.WanTypeList = data.custom.WanTypeList.split(",");
                    for(var i in _this.globalConfig.WanTypeList){
                        if(_this.globalConfig.WanTypeList[i] == "dhcp"){
                            _this.globalConfig.WanTypeList_DHCP = true;
                        }else if(_this.globalConfig.WanTypeList[i] == "static"){
                            _this.globalConfig.WanTypeList_STATIC = true;
                        }else if(_this.globalConfig.WanTypeList[i] == "pppoe"){
                            _this.globalConfig.WanTypeList_PPPOE = true;
                        }
                    }
                    localStorage.setItem('globalConfig',JSON.stringify(data));
                    if(data.showAutoLang == "1"){
                        _this.globalConfig.showLanguage.splice(0,0,"auto");
                        _this.globalConfig.showAutoLang = true;
                    }else{
                        _this.globalConfig.showAutoLang = false;
                    }
                    if(data.langAutoFlag == "1"){
                        _this.globalConfig.langAutoFlag = true;
                        if(applang == "zh-tw"||applang == "zh-hk"){
                            applang = "ct";
                        }else if(applang == "zh-cn"||applang == "zh"||applang == "zh-sg"){
                            applang = "cn";
                        }else if(applang == "en"||applang == "en-us"||applang == "en-gb"){
                            applang = "en";
                        }else if(applang == "ja"){
                            applang = "jp";             
                        }else if(applang == "be"||applang == "ru"||applang == "ru-md"){
                            applang = "ru";             
                        }
                        localStorage.setItem('lang',applang);
                        _this.$i18n.locale = applang;
						_this.langAutoFlag = "1";
                    }else{
                        if (data.defaultLang) {
                            localStorage.setItem('lang',data.defaultLang);
                            _this.$i18n.locale = data.defaultLang;
							_this.langAutoFlag = "0";
							applang = data.defaultLang;
                        }
                    } 
					if(data.langAutoFlag == "1"){
						postVar.lang = applang;
						postVar.langAutoFlag = _this.langAutoFlag;
						uiPost.setLanguageCfg(postVar);
					}
                });
            },
            mounted:function(){
                setHeight();
                var gl = JSON.parse(localStorage.getItem('globalConfig'));
                for (var i in gl) {
                    this.globalConfig[i] = gl[i];
                }
            },
            components:{
                'cs-main':cs_main
            },
            methods:{
            }
        });
    }
    catch (e) {
        location.href = '/error.html';
    }

    obj.onresize = _debounce(function () {
        setHeight();
    }, 500);

    function setHeight() {
        var _offsetHeight = document.documentElement.offsetHeight;
        var _clientHeight = document.documentElement.clientHeight;
        if (_offsetHeight<_clientHeight) {
            _setClentHeight('cs_left',_clientHeight);
            _setClentHeight('cs_layout',_clientHeight+65);
        }else{
            _setClentHeight('cs_left',_offsetHeight);
            _setClentHeight('cs_layout',_offsetHeight);
        }
    }
    
    function _setClentHeight(div,height) {
        var _obj = document.getElementById(div);
        if (_obj) {
            height = height == 'auto' ? 'auto' : (height-65)+'px'; 
            _obj.style.height = height;
        }
    }

    // return obj.main = main;
})(window);