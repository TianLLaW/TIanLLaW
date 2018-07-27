## 编译配置文件（类似Makefile文件）
> 官方文档：[https://www.gulpjs.com.cn](https://www.gulpjs.com.cn) 。  
> Gulp - 用自动化构建工具增强你的工作流程！
> - **易于使用** - 通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。
> - **构建快速** - 利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。
> - **插件高质** - Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。
> - **易于学习** - 通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

### 一 快速入门
1. 在项目根目录下创建一个名为 `gulpfile.js` 的文件：
```JavaScript
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
2.  运行 gulp 
```
# gulp
```
> 默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。  
> 想要单独执行特定的任务（task），请输入 `gulp <task> <othertask>`。

### 二 API文档
官网链接：[https://www.gulpjs.com.cn/docs/api/](https://www.gulpjs.com.cn/docs/api/)   
详情去官网看下，如果只是维护，了解即可。

### 详细说明

```JavaScript
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var roots = './dist/';
var browserSync = require('browser-sync').create();
```

1. `require` 函数使用于引用所需要的包。
2. 使用了工具有：`gulp`,`gulp-clean-css`,`gulp-uglify`,`gulp-rename`,`del`,`gulp-htmlmin`,`browser-sync`
3. `roots` 变量是定义了接下来操作对应的目录。也就意味着所有的目录都在下面进行。


```JavaScript
gulp.task('default',['build']);
```

1. 定义默认的入口，也就是运行 `gulp` 命令的时候默认执行的任务，第二个参数是前置任务，必须先执行前置任务，才能执行自己的任务。下同。


```JavaScript
// 1. 
gulp.task('iview:min',['vue:min'],function(){
    return gulp.src('./plugin/iview/iview.min.js').pipe(rename('iview.js')).pipe(gulp.dest(roots+'plugin/iview'));
});
// 2. 
gulp.task('vue:min',['cleanCSS'],function(){
    return gulp.src('./plugin/vue.min.js').pipe(rename('vue.js')).pipe(gulp.dest(roots+'plugin'));
});
```

1. 把 `iview.min.js` 重命名为 `iview.js` 并放到 `dist/plugin/iview` 目录下。
1. 把 `vue.min.js` 重命名为 `vue.js` 并放到 `dist/plugin` 目录下。

```JavaScript
gulp.task('cleanCSS',['minifyjs'],function(){
   return gulp.src('./static/css/*.css').pipe(cleanCSS()).pipe(gulp.dest(roots+'static/css'));
});
```

1. 把 `static/css` 目录下的所有 `样式` 文件都进行压缩处理，并存到 `dist/static/css` 目录下。

```JavaScript
gulp.task('minifyjs',['minifyhtml'],function(){
    return gulp.src(['./static/js/*.js','./plugin/util.js','./plugin/vue-i18n.js'],{base:'./'}).pipe(uglify()).pipe(gulp.dest(roots));
});
```

1. 把 `static/js` 目录下的所有 `脚本` 文件都进行压缩处理，并存到 `dist/static/js` 目录下。
2. 把 `plugin/util.js` 、`plugin/vue-i18n.js` 这两个 `脚本` 文件都进行压缩处理，并存到 `dist/plugin` 目录下。

```JavaScript
gulp.task('minifyhtml',['move'], function() {
  return gulp.src(['dist/**/*.html','dist/**/*.html'])
    .pipe(htmlmin({
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest('dist'));
});
```

1. 对项目里面的所有html文件进行压缩处理（具体看上面的注释）。

```JavaScript
gulp.task('move',['clean:dist'],function() {
  return gulp.src(['./adm/*', './firewall/*', './internet/*',  './net/*', './mobile/**', './plugin/**', '!./plugin/vue.*js','!./plugin/iview/iview.*js','./static/**','!./static/images/*.psd', './wireless/*', './*.html', './*.htm', './favicon.ico'],{base:'./'})
      .pipe(gulp.dest(roots));
});
```

1. 移动项目所需的文件。
    - `adm` 目录下所有文件
    - `firewall` 目录下所有文件
    - `internet` 目录下所有文件
    - `net` 目录下所有文件
    - `mobile` 目录下所有文件
    - `plugin` 目录下所有文件
    - `!./plugin/vue.*js` 对 `plugin`目录下的 `vue` 开头的文件不做处理。
    - `!./plugin/iview/iview.*js` 对 `plugin/iview`目录下的 `iview` 开头的文件不做处理。
    - `static` 目录下所有文件
    - `!./static/images/*.psd` 对 `static/images`目录下的 `.psd` 结尾的文件不做处理。
    - `wireless` 目录下所有文件
    - `./*.html` 根目录下所有 `.html` 文件
    - `./*.htm` 根目录下所有 `.htm` 文件
    - `favicon.ico` 根目录下该文件


```JavaScript
gulp.task('clean:dist', function (cb) {
    return del(['./dist/**/*'], cb);
});
```

1. 删除 `dist` 目录下的所有文件

```JavaScript
gulp.task('server', function() {
    var files = [
      '**/*.html',
      '**/*.css',
      '**/*.js'
    ];
    browserSync.init({
        server: {baseDir: "./"}
    });
});
```

1. 创建一个同步浏览的功能，这里使用这个充当web服务器。

