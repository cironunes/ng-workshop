var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

gulp.task('serve', function() {
  connect.server({
    root: 'begin',
    livereload: true
  });

  gulp.src('./begin/*.html')
    .pipe(open('', { url: 'http://localhost:8080' }));
});

gulp.task('serve:final', function() {
  connect.server({
    root: 'end',
    livereload: true
  });

  gulp.src('./end/*.html')
    .pipe(open('', { url: 'http://localhost:8080' }));
});
