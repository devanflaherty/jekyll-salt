// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    bower = require('gulp-bower')

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src('./build/scss/**/*.scss')
    .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
    }))
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./src/assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./src/assets/css/'))
});

// JSHint, concat, and minify JavaScript
gulp.task('site-js', function() {
  return gulp.src([

           // Grab your custom scripts
  		  './build/js/scripts/*.js',
        './build/js/scrollmagic/*.js'

  ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./src/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./src/assets/js'))
});

// JSHint, concat, and minify Foundation JavaScript
gulp.task('foundation-js', function() {
  return gulp.src([

  		  // Foundation core - needed if you want to use any of the components below
          './bower_components/foundation-sites/js/foundation.core.js',
          './bower_components/foundation-sites/js/foundation.util.*.js',

          // Pick the components you need in your project
          './bower_components/foundation-sites/js/foundation.abide.js',
          './bower_components/foundation-sites/js/foundation.accordion.js',
          './bower_components/foundation-sites/js/foundation.accordionMenu.js',
          './bower_components/foundation-sites/js/foundation.drilldown.js',
          './bower_components/foundation-sites/js/foundation.dropdown.js',
          './bower_components/foundation-sites/js/foundation.dropdownMenu.js',
          './bower_components/foundation-sites/js/foundation.equalizer.js',
          './bower_components/foundation-sites/js/foundation.interchange.js',
          './bower_components/foundation-sites/js/foundation.magellan.js',
          './bower_components/foundation-sites/js/foundation.offcanvas.js',
          './bower_components/foundation-sites/js/foundation.orbit.js',
          './bower_components/foundation-sites/js/foundation.responsiveMenu.js',
          './bower_components/foundation-sites/js/foundation.responsiveToggle.js',
          './bower_components/foundation-sites/js/foundation.reveal.js',
          './bower_components/foundation-sites/js/foundation.slider.js',
          './bower_components/foundation-sites/js/foundation.sticky.js',
          './bower_components/foundation-sites/js/foundation.tabs.js',
          './bower_components/foundation-sites/js/foundation.toggler.js',
          './bower_components/foundation-sites/js/foundation.tooltip.js',
  ])
    .pipe(concat('foundation.js'))
    .pipe(gulp.dest('./src/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest('./src/assets/js'))
});

// Update Foundation with Bower and save to /vendor
gulp.task('bower', function() {
  return bower({ cmd: 'update'})
    .pipe(gulp.dest('./vendor/'))
});

// Copy task
gulp.task('copy', function() {
  // ScrollMagic
  var scrollmagic = gulp.src('bower_components/scrollmagic/**/*.*')
      .pipe(gulp.dest('assets/js/'));

  return merge(motionUi, whatInput, fontAwesome, scrollmagic);
});

// Create a default task
gulp.task('default', function() {
  gulp.start('styles', 'site-js', 'foundation-js');
});

// Watch files for changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./build/scss/**/*.scss', ['styles']);

  // Watch site-js files
  gulp.watch('./build/js/scripts/*.js', ['site-js']);

  // Watch scrollmagic files
  gulp.watch('./build/js/scrollmagic/*.js', ['site-js']);

  // Watch foundation-js files
  gulp.watch('./bower_components/foundation-sites/js/*.js', ['foundation-js']);

});
