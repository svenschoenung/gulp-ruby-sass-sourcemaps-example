var gulp = require('gulp');
var sass     = require('gulp-ruby-sass');
var cleanCss = require('gulp-clean-css');
var srcmaps  = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
  return  sass('css/**/*.scss', {sourcemap: true})
     .on('error',sass.logError)
     .pipe(cleanCss())
     .pipe(srcmaps.write())
     .pipe(gulp.dest('css'));
});

gulp.task('default', ['css'], function() {
  return gulp.src('.')
    .pipe(webserver({open: true}));
});
