const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('build:s', function() {
  return gulp.src(['server/src/**/*.js', '!server/test/*.js'])
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015-node', 'stage-0'],
        plugins: ['transform-runtime']
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./bin'));
});

gulp.task('watch', function() {
  gulp.watch('server/**/*.js', ['build:s']);
});

gulp.task('default', ['watch', 'build:s']);