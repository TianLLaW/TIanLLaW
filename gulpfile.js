var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var roots = './dist/';
var browserSync = require('browser-sync').create();


gulp.task('default',['build']);

gulp.task('build',['iview:min']);

gulp.task('iview:min',['vue:min'],function(){
    return gulp.src('./plugin/iview/iview.min.js').pipe(rename('iview.js')).pipe(gulp.dest(roots+'plugin/iview'));
});

gulp.task('vue:min',['cleanCSS'],function(){
    return gulp.src('./plugin/vue.min.js').pipe(rename('vue.js')).pipe(gulp.dest(roots+'plugin'));
});

//css处理
gulp.task('cleanCSS',['minifyjs'],function(){
   return gulp.src('./static/css/*.css').pipe(cleanCSS()).pipe(gulp.dest(roots+'static/css'));
});

//JS处理
gulp.task('minifyjs',['minifyhtml'],function(){
    return gulp.src(['./static/js/*.js','./plugin/util.js','./plugin/vue-i18n.js'],{base:'./'}).pipe(uglify()).pipe(gulp.dest(roots));
});

gulp.task('minifyhtml',['move'], function() {
  return gulp.src(['dist/**/*.html','dist/**/*.html'])
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    }))
    .pipe(gulp.dest('dist'));
});

// 文件处理
gulp.task('move',['clean:dist'],function() {
  return gulp.src(['./ac/*','./adm/*', './firewall/*', './internet/*', './server/*', './net/*', './mobile/**', './plugin/**', '!./plugin/vue.*js','!./plugin/iview/iview.*js','./static/**','!./static/images/*.psd', './wireless/*', './*.html', './*.htm', './favicon.ico'],{base:'./'})
      .pipe(gulp.dest(roots));
});

gulp.task('clean:dist', function (cb) {
    return del(['./dist/**/*'], cb);
});

// 静态服务器
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
