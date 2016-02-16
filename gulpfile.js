'use strict';

var gulp = require('gulp');
var chalk = require('chalk');
var source = require('vinyl-source-stream');

var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');

// client compilation deps
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');

// css
var stylus = require('gulp-stylus');
var minifyCss = require('gulp-minify-css');

gulp.task('serve', ['stylus', 'browserify:watch'], function() {
  gulp.watch('stylus/**/*.styl', ['stylus']);

  return nodemon({
    script: 'server/app.js',
    ignore: ['node_modules', 'public']
  });
});

gulp.task('stylus', function() {
  return gulp.src('stylus/**/*.styl')
    .pipe(stylus())
    .pipe(minifyCss())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('browserify:watch', function() {
  return compile(true);
});

function compile(watch) {
  var watch = watch || false;

  var browserifyOpts = {
    entries: './client/main.js',
  };

  var bundle = (watch)
    ? watchify(browserify(browserifyOpts), { poll: 100 })
    : browserify(browserifyOpts);

  bundle.transform(babelify);
  bundle.on('update', function() {
    return rebundle(bundle);
  });

  function rebundle(bundle) {
    return bundle.bundle()
      .on('error', function(error) {
        console.log(error);
        gutil.log(chalk.red(error.stack));
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('public/javascripts'));
  }

  return rebundle(bundle);
}
