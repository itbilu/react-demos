var gulp       = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function () {
  gulp.src(['components/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['scripts']);

