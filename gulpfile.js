'use strict';

var gulp = require('gulp');
var gulpConfig = require('./gulp.config.js');
var concat = require('gulp-concat');
var minifier = require('gulp-uglify/minifier');
var uglifyjs = require('uglify-js-harmony');
var gzip = require('gulp-gzip');

gulp.task('build-app', ['build-html'], function() {
  return gulp
    .src(gulpConfig.scripts.src)
    .pipe(concat(gulpConfig.scripts.output))
    .pipe(minifier(gulpConfig.uglify, uglifyjs))
    .pipe(gzip(gulpConfig.gzip))
    .pipe(gulp.dest(gulpConfig.scripts.dest));
});

gulp.task('build-html', function() {
  return gulp
    .src(gulpConfig.templates.src)
    .pipe(gulp.dest(gulpConfig.templates.dest));
});

