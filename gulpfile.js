'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// Configuration file to keep your code DRY
var cfg = require('./gulpconfig.json');
var paths = cfg.paths;


// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/sass/styles.scss')
      // Compile SASS files
      .pipe(sass({
          outputStyle: 'nested',
          precision: 10,
          includePaths: ['.'],
          onError: console.error.bind(console, 'Sass error:')
      }))
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer())
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    const scripts = [
        `${paths.dev}/js/three.min.js`,
        `${paths.dev}/js/jquery.min.js`,
        `${paths.dev}/js/jquery.modal.min.js`,
        `${paths.dev}/js/slickQuiz.js`,
        `${paths.dev}/js/script.js`,
        // `${paths.dev}/js/globe.js`,
        `${paths.dev}/js/stats-api.js`
    ];

    gulp.src(scripts, { allowEmpty: true })
        .pipe(babel())
        // Minify the file
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        // Output
        .pipe(gulp.dest(`${paths.dist}/js`));

    return gulp.src(scripts, { allowEmpty: true })
        .pipe(babel())
        // Minify the file
        .pipe(concat('script.js'))
        // Output
        .pipe(gulp.dest(`${paths.dist}/js`))
});




