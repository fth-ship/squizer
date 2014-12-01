var gulp = require('gulp');
var util = require('gulp-util');
var jsdoc2md = require('gulp-jsdoc-to-markdown');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp
  .task('docs', function () {
    return gulp
             .src(['modules/*.js'])
             .pipe(concat('README.md'))
             .pipe(jsdoc2md())
             .on('error', function (err) {
               util.log(util.color.red('jsdoc-to-markdown was failed'), err.message);
             })
             .pipe(gulp.dest('.'));
  });
