var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
// var react = require('gulp-react');
// var reactdom = require('gulp-react-dom');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['sass', 'js'], function() {
  console.log('fasd')
});

gulp.task('watch', function() {
  gulp.watch('src/*.*', ['sass', 'js'])
})

gulp.task('babel', function() {
  return gulp.src('src/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('src'));
});

gulp.task('browserify', function() {
  return browserify("src/index.js")
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'))
});

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});

gulp.task('sass', function() {
  return gulp.src('src/*.scss')
    .pipe(gulp.dest('build'));
});