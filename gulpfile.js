var gulp = require('gulp');
var browsify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
    return browsify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('shareyourknowledge.js'))
        .pipe(gulp.dest('./build/'))
});