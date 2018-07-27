// 注册Icon
Vue.component('Icon', {
    template: '<i :class="classes" :style="styles"></i>',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        classes: function() {
            return 'cs-icon ' + 'cs-icon-' + this.type;
        },
        styles: function() {
            var style = {};
            if (this.size) {
                style['font-size'] = this.size + 'px';
            }
            if (this.color) {
                style.color = this.color;
            }
            return style;
        }
    }
});

// 注册header
Vue.component('cs-header', {
    render: function(h) {
        if (this.obj) {
            var arr = [
                h('div', {
                    slot: 'left',
                    on: {
                        click: function() {
                            alert(1);
                        }
                    }
                }, [
                    h('yd-navbar-back-icon')
                ])
            ];
        }
        return h('yd-navbar', {
            props: {
                title: this.title,
                fixed: true
            }
        }, arr);
    },
    props: {
        title: String,
        obj: [Array, Object],
    },
    data: function() {
        return {
            globalConfig: globalConfig,
        }
    }
});

// 注册footer
Vue.component('cs-footer', {
    template: '\
<div style="font-size: 10px;text-align: center;">\
    <div v-html="copyright"></div>\
    <div v-if="globalConfig.hasMobile" style="padding-top: 5px;"> <a href="/home.html" style="color:#2d8cf0">{{ $t("menu.pc") }}</a> | {{ $t("menu.mobile") }} </div>\
</div>\
  ',
    data: function() {
        return {
            globalConfig: globalConfig,
        }
    },
    computed: {
        copyright: function() {
            return this.globalConfig.copyRight.replace(/\[date\]/i, (new Date).getFullYear());
        }
    }
});

// 注册bottom
Vue.component('cs-bottom', {
    template: '<div>\
<yd-tabbar fixed :exact="false">\
  <yd-tabbar-item type="a" v-for="(v,i) in menu" :key="i" :title=$t("menu.status") :link="globalConfig.m.url + v.href + globalConfig.urlExtension" :active="v.id == isActive" @click.native="isActives(v.id)">\
    <div slot="txt">sadfsafhasfkl</div>\
    <Icon slot="icon" :type="v.icon" size="24"></Icon>\
  </yd-tabbar-item>\
</yd-tabbar>\
</div>\
  ',
    render: function(h) {
        var _this = this;
        var children = [];
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].display) {
                children.push(
                    h('yd-tabbar-item', {
                        props: {
                            type: "a",
                            title: this.$t('menu["'+this.menu[i].text+'"]'),
                            link: this.globalConfig.m.url + this.menu[i].href + this.globalConfig.urlExtension,
                            active: (this.menu[i].id == this.isActive)
                        }
                    },[
                        h('Icon',{slot:"icon",props:{type:this.menu[i].icon,size:24}})
                    ])
                )
            }
        }
        return h('yd-tabbar', {
            props: {
                fixed: true,
                exact: false
            }
        }, children);
    },
    data: function() {
        return {
            globalConfig: globalConfig,
            menu: mobileMenu
        }
    },
    computed: {
        title: function() {
            var obj = {};
            for (var i = 0; i < this.menu.length; i++) {
                obj[this.menu[i].text] = this.$t('menu.status');
            }
            return obj;
        },
        isActive: function() {
            var tmp = localStorage.getItem('cs_mobile_menu');
            return tmp ? tmp : 'status';
        }
    },
    methods: {
    }
});

(function() {
    new Vue({
        el: '#app',
        template: '<yd-layout>\
            <yd-tabbar v-if="globalConfig.m.showHeader" slot="navbar"><cs-header :title="globalConfig.iHeader"></cs-header></yd-tabbar>\
            <cs-main style="padding: 50px 0 30px;">\
            <cs-footer slot="footer"></cs-footer>\
            </cs-main>\
            <yd-tabbar v-if="globalConfig.m.showBottom" slot="tabbar"><cs-bottom></cs-bottom></yd-tabbar>\
        </yd-layout>\
        ',
        i18n: i18n,
        data: {
            globalConfig: globalConfig,
        },
        created: function() {
           // this.$i18n.locale = localStorage.getItem('lang') || globalConfig.defaultLang;
            uiPost.getInitConfig(function(data) {
				document.title = data.webTitle;
				this.globalConfig.copyRight = data.copyRight; 
                this.globalConfig.iHeader = data.webTitle;
                localStorage.setItem('globalConfig', JSON.stringify(data));
                if (data.defaultLang) {
                    localStorage.setItem('lang',data.defaultLang);
                    this.globalConfig.defaultLang = data.defaultLang;
                }
            });
            this.$i18n.locale = localStorage.getItem('lang') || globalConfig.defaultLang;
        },
        mounted: function() {
            var gl = JSON.parse(localStorage.getItem('globalConfig'));
            for (var i in gl) {
                this.globalConfig[i] = gl[i];
            }
        },
        components: {
            'cs-main': cs_main
        },
        methods: {}
    });
})();