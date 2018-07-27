## 初始化函数（入口函数）
### 一 主要代码[new Vue]（简述）
```JavaScript
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
        this.$i18n.locale = localStorage.getItem('lang') || globalConfig.defaultLang;
        uiPost.getInitConfig(function(data){
            localStorage.setItem('globalConfig',JSON.stringify(data));
            if (data.defaultLang) {
                localStorage.setItem('lang',data.defaultLang);
                _this.$i18n.locale = data.defaultLang;
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
```
先简单看看上面的代码，再配合 `vue` 的生命周期图一起使用：
<div align="center">
  <img src="/tutorials/images/lifecycle.png" alt="lifecycle" class="img-responsive" style="width: 500px;">
</div>

我们不难发现。页面一加载到 `new Vue()` 这个对象以后，就开始依次执行里面的函数。如图：
<div align="center">
  <img src="/tutorials/images/vue_main.png" class="img-responsive">
</div>

### 二 组件[components]
#### 2.1 什么是组件？
组件 (Component) 是 `Vue.js` 最强大的功能之一。组件可以扩展 `HTML` 元素，封装可重用的代码。在较高层面上，组件是自定义元素，`Vue.js` 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 `is` 特性进行了扩展的原生 `HTML` 元素。 

所有的 `Vue` 组件同时也都是 `Vue` 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。  

详细的请查看官网【[组件](https://cn.vuejs.org/v2/guide/components.html)】

#### 2.2 使用组件
⒈ 分两种注册方式：
1. 全局注册。
    放到layout.js 仿照layout.js文件里面的全局组件注册就行。
    ```JavaScript
    // 注册breadcrumb
    Vue.component('组件名称', {
        template: '布局HTML',
        props:['使用父级的属性'],
        data:function(){
            return {}; // 这里必须要用闭包。
        },
        create:function(){
            // 初始化操作。
        },
        // xxx 其他
    })
    ```
2. 局部注册。
    ```JavaScript
    var 子 = {
        template: '布局HTML',
        props:['使用父级的属性'],
        data:function(){
            return {}; // 这里必须要用闭包。
        },
        create:function(){
            // 初始化操作。
        },
        // xxx 其他
    };
    // 使用注册。
    // 需要在其父组件里面注册。或者在new Vue里面使用
    var 父 = {
        xxxx:{},
        components:{
            '子':子
        },
    }
    ```

⒉ 使用方式： <组件名称></组件名称>
```HTML
<cs-main></cs-main>
```

> **注意**：全局组件和局部组件的注册必须在 `new Vue` 前面申明。