require('es6-promise').polyfill();

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sassMerge = require('gulp-merge-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

var browserSync = require('browser-sync').create();

var sassSources = ['scss/**/*.scss'];

// Sass
gulp.task('sass', function() {
    return gulp
        .src('./scss/APPLICATION.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sassMerge())
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(cssmin())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

// BrowserSync
gulp.task('browser-sync', function() {

    browserSync.init({
        proxy: 'localhost:8888'
    });
});


gulp.task('watch', function() {
    gulp.watch(sassSources, ['sass']);
});

gulp.task('default', ['sass','browser-sync','watch']);

