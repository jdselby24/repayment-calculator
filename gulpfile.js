var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

function hello(cb) {
    console.log('hello');
    cb();
}

function sassCompile(cb) {
    return gulp.src('app/src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/dist/css'))
    cb()
}

function watch(cb) {
    gulp.watch('app/src/scss/**/*.scss', sassCompile)
    gulp.watch('app/src/js/**/*.js', babelGulp)
}

function babelGulp(cb) {
    return gulp.src("app/src/js/main.js")
        .pipe(babel())
        .pipe(gulp.dest("app/dist/js"));
    cb()
}

exports.hello = hello;
exports.watch = watch;
exports.sass = sassCompile;
exports.babelGulp = babelGulp