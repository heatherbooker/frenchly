var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var reactdom = require('gulp-react-dom');

gulp.task('default', ['sass', 'js'], function() {
  console.log('fasd')
});

gulp.task('watch', function() {
  gulp.watch('src/*.*', ['sass', 'js'])
})

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});

gulp.task('sass', function() {
  return gulp.src('src/*.scss')
    .pipe(gulp.dest('build'));
});