var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
inject = require('gulp-inject');

gulp.task('index', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['bower_components/angular/angular.js','node_modules/angular-ui-router/release/angular-ui-router.js' , './apps.js', './js/**/*.js', './css/**/*-layout.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});
