## 封装函数
### 一 封装函数
#### 1.1 get （DEMO）
```JavaScript
uiPost.prototype.getXxx = function(postVar,callback){
    this.topicurl = 'getXxx';
    // this.async = true; // 默认true。true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/init.json'; // 这里换成对应的数据文件。
    }
    return this.post(postVar,callback);
};
``` 
#### 1.2 set （DEMO）
```JavaScript
/**
 * 这里写上文档注释（说明）
 * @param      {[type]} [varname] [description]
 * @property   {[type]} [varname] [description]
 * @return  {Object}
 * @example
 * 实际的案例。
 */
uiPost.prototype.setXxx = function(postVar,callback){
    this.topicurl = 'setXxx';
    // this.async = true; // 默认true。true:异步，false:同步。
    return this.post(postVar,callback);
};
```

**注意：**   
1. `param`    这里定义为request（请求） 参数 
2. `property` 这里定义为response（响应） 参数


### 二 写文档（topicurl.js）
#### 2.1 申明函数，并且写上注释（说明）
在 `topicurl.js` 里面的数据名称需要注意大小写。必虚写上所有请求数据和响应数据，并注明可提供的值和值代表的意义。  

```JavaScript
/**
 * 这里写上文档注释（说明）
 * @param {[type]} [varname] [description]
 * @property {[type]} [varname] [description]
 * @return 
 * @example
 * 实际的案例。
 */
uiPost.prototype.getXxx = function(postVar,callback){
    this.topicurl = 'getXxx';
    // this.async = true; // 默认true。true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/xxxx.json'; // xxxx 这里换成对应的数据文件(data目录下)。
    }
    return this.post(postVar,callback);
};
// 把Xxx的位置换成对应的主题即可。
```
eg:
```JavaScript
/**
 * getEasyWizardCfg 主题
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-10-27
 * @param    {Object}   topicurl        当前请求的主题（一般函数名称就是topicurl的参数，所以可以忽略该参数。）
 *
 * @property {String} wanConnMode       连接模式。0：静态IP，1：DHCP，2：PPPOE拨号                  
 * @property {String} staticIp          静态 IP地址      
 * @property {String} staticMask        静态 子网掩码      
 * @property {String} staticGw          静态 网关      
 * @property {String} wanPriDns         首选dns地址      
 * @property {String} wanSecDns         备用dns地址     
 * @property {String} wanConnStatus     连接状态   1:连接，0断开。
 * @property {String} xxxxx             其他的参数 
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getEasyWizardCfg"
 * }
 * response:
 * {
 *    "wanConnMode":  1,
 *    "staticIp": "172.1.1.1",
 *    "staticMask":  "255.255.255.0",
 *    "staticGw": "172.1.1.254",
 *    "wanPriDns":  "114.114.114.114",
 *    "wanSecDns":  "0.0.0.0",
 *    "wanConnStatus":  "disconnected",
 * ....
 * }
 */

> **注意：这里的参数必须写上数据类型，如果有值选项必须写上可选值，尽可能的写到最详细。**
```

#### 2.2 在 `topicurl.js` 主题列表里面写上主题简要说明：  
**语法：** 
```JavaScript
/**
 * @property {Object} 主题名称 简述 <a href="#主题名称">点击查看</a> 
 */
```
eg：
```JavaScript
/**
 * @property {Object} setEasyWizardCfg 提交wizrad数据 <a href="#setEasyWizardCfg">点击查看</a> 
 */
```

### 三 调用（使用）方式
> 我们按照上面的形式封装好函数后，就会生成对应的文档。那么改函数的调用方式就是：

#### 1.1 getXxx
**语法**： `uiPost.getXxx([data,]fnc)`    
**说明**： get函数一般只传递一个参数（函数），即只传递一个匿名函数(回调函数)。倘若需要传递数据的情况下可以传递两个参数（第一个是json对象格式的数据，第二个是回调函数）进去。   
**实例**：  
1. 一个参数：  
```JavaScript
uiPost.getLoginCfg(function(data) {
    // 后台返回的数据。
});
```
2. 两个参数：
```JavaScript
var postVar = {wifiIdx:"2"};
uiPost.getXxx(postVar,function(data) {
    // 后台返回的数据。
});
```

#### 1.2 setXxx
**语法**： `uiPost.setXxx([data,]fnc)`    
**说明**： set函数都会传递两个参数（第一个是json对象格式的数据，第二个是回调函数）。   
**实例**：  
```JavaScript
var postVar = {wifiIdx:"2"};
uiPost.setXxx(postVar,function(data) {
    // 后台返回的数据。
});
```
