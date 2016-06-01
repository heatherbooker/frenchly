var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['html', 'js'], function() {});

gulp.task('watch', function() {
  gulp.watch('src/*.jsx', ['js'])
});

gulp.task('js', ['bundle'], function() {
  return gulp.src('src/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('src'));
});

gulp.task('bundle', function() {
  watchify(browserify("src/index.js"))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
  return gulp.src('src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});