// Grab our gulp packages
var $           = require('gulp-load-plugins')();
var colors      = require('colors');
var del         = require('del');
var gulp        = require('gulp');
var merge       = require('merge-stream');
var stylish     = require('jshint-stylish');
var sequence    = require('run-sequence');
var cleanCSS    = require('gulp-clean-css');

// Browsers to target when prefixing CSS.
var COMPATIBILITY = [
  'last 2 versions',
  'ie >= 9',
  'Android >= 2.3'
];

// File paths to various assets are defined here.
var PATHS = {
  sass: [
    './node_modules/foundation-sites/scss',
    './node_modules/motion-ui/src',
    './node_modules/fontawesome/scss',
  ],
  javascript: [
    // Foundation core - needed if you want to use any of the components below
    './node_modules/what-input/what-input.js',
    './node_modules/foundation-sites/js/foundation.core.js',
    './node_modules/foundation-sites/js/foundation.util.*.js',

    // Pick the components you need in your project
    './node_modules/foundation-sites/js/foundation.abide.js',
    './node_modules/foundation-sites/js/foundation.accordion.js',
    './node_modules/foundation-sites/js/foundation.accordionMenu.js',
    './node_modules/foundation-sites/js/foundation.drilldown.js',
    './node_modules/foundation-sites/js/foundation.dropdown.js',
    './node_modules/foundation-sites/js/foundation.dropdownMenu.js',
    './node_modules/foundation-sites/js/foundation.equalizer.js',
    './node_modules/foundation-sites/js/foundation.interchange.js',
    './node_modules/foundation-sites/js/foundation.magellan.js',
    './node_modules/foundation-sites/js/foundation.offcanvas.js',
    './node_modules/foundation-sites/js/foundation.orbit.js',
    './node_modules/foundation-sites/js/foundation.responsiveMenu.js',
    './node_modules/foundation-sites/js/foundation.responsiveToggle.js',
    './node_modules/foundation-sites/js/foundation.reveal.js',
    './node_modules/foundation-sites/js/foundation.slider.js',
    './node_modules/foundation-sites/js/foundation.sticky.js',
    './node_modules/foundation-sites/js/foundation.tabs.js',
    './node_modules/foundation-sites/js/foundation.toggler.js',
    './node_modules/foundation-sites/js/foundation.tooltip.js',

    // Motion UI
    './node_modules/motion-ui/motion-ui.js',

    // Include your own custom scripts (located in the custom folder)
    './build/js/scripts/*.js',

    // Custom ScrollMagic
    './build/js/scrollmagic/*.js',
  ]
}

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
  return gulp.src('build/scss/styles.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    }))
    .on('error', $.notify.onError({
        message: "<%= error.message %>",
        title: "Sass Error"
    }))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe($.rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css/'))
});

// Lint all JS files in custom directory
gulp.task('lint', function() {
  return gulp.src([
         // Grab your custom scripts
		  './build/js/scripts/*.js',
      './build/js/scrollmagic/*.js'
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.notify(function (file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
  var uglify = $.uglify()
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Uglify JS Error"
    }));

  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['es2015']
    }))
    .pipe($.concat('app.js', {
      newLine:'\n;'
    }))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(uglify)
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/js/'))
});

// Copy task
gulp.task('copy', function() {
  // Jquery
  var jquery = gulp.src('node_modules/jquery/dist/**/*.*')
    .pipe($.flatten())
    .pipe(gulp.dest('assets/js/vendor/jquery'));

  // Motion UI
  var motionUi = gulp.src('node_modules/motion-ui/**/*.*')
    .pipe($.flatten())
    .pipe(gulp.dest('assets/js/vendor/motion-ui'));

  // What Input
  var whatInput = gulp.src('node_modules/what-input/**/*.*')
      .pipe($.flatten())
      .pipe(gulp.dest('assets/js/vendor/what-input'));

  // Font Awesome
  var fontAwesome = gulp.src('node_modules/fontawesome/fonts/**/*.*')
      .pipe(gulp.dest('assets/fonts'));

  // ScrollMagic
  var scrollmagic = gulp.src('node_modules/scrollmagic/**/*.*')
    .pipe($.flatten())
    .pipe(gulp.dest('assets/js/vendor/scrollmagic'));

  // Instafeed
  var instafeed = gulp.src('node_modules/instafeed.js/**/*.*')
    .pipe($.flatten())
    .pipe(gulp.dest('assets/js/vendor/instafeed'));

  // Jribbble
  var jribbble = gulp.src('node_modules/jribbble/dist/**/*.*')
      .pipe(gulp.dest('assets/js/vendor/jribbble'));

  return merge(jquery, motionUi, whatInput, fontAwesome, scrollmagic, instafeed, jribbble);
});

// Build task
// Runs copy then runs sass & javascript in parallel
gulp.task('build', ['clean'], function(done) {
  sequence('copy',
          ['sass', 'javascript', 'lint'],
          done);
});

// Clean task
gulp.task('clean', function(done) {
  sequence(['clean:javascript', 'clean:css'],
            done);
});

// Clean JS
gulp.task('clean:javascript', function() {
  return del([
      'assets/js/app.js',
      'assets/js/app.js.map'
    ]);
});

// Clean CSS
gulp.task('clean:css', function() {
  return del([
      'assets/css/styles.css',
      'assets/css/styles.css.map'
    ]);
});

// Default gulp task
// Run build task and watch for file changes
gulp.task('default', ['build'], function() {
  // Log file changes to console
  function logFileChange(event) {
    var fileName = require('path').relative(__dirname, event.path);
    console.log('[' + 'WATCH'.green + '] ' + fileName.magenta + ' was ' + event.type + ', running tasks...');
  }

  // Sass Watch
  gulp.watch(['build/scss/**/*.scss'], ['clean:css', 'sass'])
    .on('change', function(event) {
      logFileChange(event);
    });

  // JS Watch
  gulp.watch(['build/js/scripts/**/*.js'], ['clean:javascript', 'javascript', 'lint'])
    .on('change', function(event) {
      logFileChange(event);
    });

  // JS Watch
  gulp.watch(['build/js/scrollmagic/**/*.js'], ['clean:javascript', 'javascript', 'lint'])
    .on('change', function(event) {
      logFileChange(event);
    });
});
