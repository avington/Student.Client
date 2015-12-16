var gulp = require('gulp');
var inject = require('gulp-inject');
var debug = require('gulp-debug');

var src = './src/client/';
var indexHtml = './src/client/index.html';
var specHtml = './src/client/spec.html';

var js = [
    './src/client/**/*.module.js',
    './src/client/**/*.js',
    '!./src/client/**/*.spec.js',
    '!./src//client/**/*.mock.js'
];

var specs = [
    './src/client/**/*.module.js',
    './src/client/**/*.js',
    './src/client/**/*.spec.js',
    './src/client/**/*.mock.js'
];

gulp.task('inject:dev', function(){
   var target = gulp.src(indexHtml);
    var sources = gulp.src(js, {read: false});

    target
        .pipe(inject(sources))
        .pipe(gulp.dest(src));
});

gulp.task('inject:spec', function(){
    var target = gulp.src(specHtml);
    var sources = gulp.src(specs, {read: false});

    target
        .pipe(inject(sources))
        .pipe(gulp.dest(src));
});
