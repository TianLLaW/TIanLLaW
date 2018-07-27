## 文档（jsdoc）配置文件
> 原文文档：[http://usejsdoc.org](http://usejsdoc.org)，在此解释下这个项目里面的主要使用到的内容。

### 一 简述
JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似JavaDoc和PHPDoc。现在很多编辑器或IDE中还可以通过JSDoc直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。

### 1.1 配置文件说明
结合 JSDoc 和 Docstrap 的默认配置，我们创建一个项目使用的配置文件，简要说明：
```json
{
    "tags": {
        "allowUnknownTags": true
    },
    "recurseDepth": 10,
    "source": {
        "includePattern": ".+\\.js(doc)?$",  //正则过滤符合规则的文件
        "excludePattern": "(^|\\/|\\\\)_"   
    },
    "templates": {  //模板配置，包含了 DocStrap 的配置参数
        "cleverLinks"     : false,  
        "monospaceLinks"  : false,  
        "default"         : {  
            "outputSourceFiles" : true  
        },  
        "systemName"      : "Carystudio UI",   // 页头的标题
        "copyright"       : "Carystudio UI Copyright © 2017",   //页脚版权信息
        "navType"         : "vertical",  //vertical 或 inline
        "theme"           : "cerulean",  
        //docstrap 模板主题。可取值: cosmo, cyborg, flatly, journal, lumen, paper, readable, sandstone, simplex, slate, spacelab, superhero, united, yeti
        "linenums"        : true,   //是否显示行号
        "collapseSymbols" : false,  //是否折叠太长的内容
        "search"          : false,  //是否显示搜索框
        "inverseNav"      : false   //导航是否使用 bootstrap 的 inverse header
    },
    "opts": {
        //命令行执行参数配置。在这里配置了后
        // 命令行只需要执行: jsdoc -c conf.json 即可
        "template": "./node_modules/ink-docstrap/template", 
        "readme": "README.md",  // 写到文档首页的 readme 文档。-R README.md
        "encoding": "utf8",
        "destination": "./doc/",  // 输出目录。等同于 -d ./doc/
        "tutorials" : "./tutorials",  // 其他教程目录（Markdown格式）
        "recurse": true   //是否递归查找。 -r
    }
}
```

**备注**： 这个文件一般情况已经不需要改了，如果有其他不懂的地方移步到官网去看文档。[http://usejsdoc.org](http://usejsdoc.org)