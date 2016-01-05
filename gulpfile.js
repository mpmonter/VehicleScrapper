'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');


// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('routes/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('routes/*.js', ['jshint']);
});

gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js html css'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default', ['watch', 'start']);