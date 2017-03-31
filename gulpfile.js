var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
inject = require('gulp-inject');

gulp.task('index', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./apps.js', './controllers/**/*.js', './css/**/*-layout.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./build'));
});
