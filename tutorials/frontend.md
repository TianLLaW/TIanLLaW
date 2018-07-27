# 前端开发说明 : 快速入门

## VUE基础知识（模板语法）
> 页面渲染数据和数据绑定，组件的使用。这里主要讲script的引用方式的使用，cli模式的使用方式类同，但不一是一模一样。

### 文本
**语法**：`{{ 对象.属性 }}`
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```html
    <span>Message: {{ msg }}</span> 
    <!-- 同时这里msg也可以用于简单的表达式 -->
    eg:  {{ ok ? 'YES' : 'NO' }}
```
Mustache 标签将会被替代为对应数据对象上 `msg` 属性的值。无论何时，绑定的数据对象上 `msg` 属性发生了**改变**，插值处的内容都会**更新**。
> 简单来说 `{{ }}` 双大括号的区域已经是js的作用范围了，直接在里面编写需要的js语法。

### 属性
**语法**：`:属性="对象.属性"`
```html
    <div :id="id"></div>
```
这样`:id`对应的属性值就会对应的变化。适合用于任何标签属性：'`class`,`style`,`href`,...'

### form属性（双向数据绑定）
**语法**：`v-model="对象.属性"`
```html
<input type="text" v-model="status">
```
数据`status`对应的属性变化的时候，表单就会做相应的变化。提交时候就拿`status`提交到后台就行。不需要再去取`input`的`value`值。

### 事件
**语法**：`@事件名称="事件处理函数"`
```html
    <p @click="fun1">点击</p>
```
点击`p`标签就会执行对应的函数`fun1`。

# vue组件简单的使用
> 此处仅对我们界面用到的知识进行讲解。详细的内容要移步到官网手册: [点击查看手册](https://cn.vuejs.org/v2/guide/syntax.html)

在使用vue之前。先了解下vue的生命周期。主要看vue是怎么运转的：
<div align="center" style="width: 500px;">
  <img src="/tutorials/images/lifecycle.png" alt="lifecycle" class="img-responsive">
</div>

```JavaScript
Vue.component('cs-main', {
    template: '#main',
    data:function() {
        return {
            lang:$.lang,
            globalConfig:globalConfig
        }
    },
    created:function() {
      this.globalConfig.show_easy_setup = false;
    },
    computed:{
        local_href:function() {
            return location.host;
        }
    },
    methods:{
        submit_save:function() {
            location.href = '/wizard.html';
        }
    },
});
```
> 以上的代码就是登陆一个demo。

## 注册组件component
```
Vue.component('cs-main',option)
```
这里代表注册一个组件，名为：“`cs-main`”,`option`是携带给这个组件的所有参数。
## 组件选项：template
```JavaScript
template:'选择器'
```
指定某一行html元素。通过`id`，`class`，`标签`都可以选择。一般推荐用id选择器。
## 组件选项：data
```JavaScript
data:function() {
    return 数据
},
```
**注意：组件里面的数据必须用funciton(){reutrn  {}}的形式返回。所有需要在模板里面使用的数据必须先定义。**

## 组件选项：created
```JavaScript
    created:function() {
      // ajax请求。页面参数赋值。等等。
    },
```
初始化函数。当页面vue组件加载完成后就会调用这个`created`函数。这里面可以用于处理一些页面的初始化操作。比如获取页面初始化数据。

## 组件选项：computed
```JavaScript
computed:{
    local_href:function() {
        return location.host;
    }
},
```
计算属性：用于监听属性的变化值。同时也可以定义一个新的属性，用于页面的展示。  
计算属性的作用是当属性值改变的时候就会触发一次这个函数，否则就把当前的结果缓存起来供下次使用。  

实际用途：比如后台返回一个状态类型值为`1,2`,但页面需要显示；`开，关`。就可以用计算属性去处理了。

# 组件选项：methods
```JavaScript
methods:{
    submit_save:function() {
        location.href = '/wizard.html';
    }
},    
```
方法：顾名思义就是定义组件内所有需要的方法。

# 组件选项：watch 
用于实时监听所需要的数据。


> 此文档只适用简单的开发。详细的教程还需到官网([https://cn.vuejs.org](https://cn.vuejs.org))去看。 
