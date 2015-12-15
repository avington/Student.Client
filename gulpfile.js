var gulp = require('gulp');
var inject = require('gulp-inject');

var src = './src/';
var indexHtml = './src/index.html';
var specHtml = './src/spec.html';
var js = [
    './src/**/*.module.js',
    './src/**/*.js',
    '!./src/**/*.spec.js',
    '!./src/**/*.mock.js'
];
var specs = [
    './src/**/*.module.js',
    './src/**/*.js',
    './src/**/*.spec.js',
    './src/**/*.mock.js'
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
