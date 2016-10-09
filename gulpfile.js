var gulp         = require('gulp')
var path         = require('path')
var less         = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps   = require('gulp-sourcemaps')
var cleanCSS     = require('gulp-clean-css')
var rename       = require('gulp-rename')
var concat       = require('gulp-concat')
var uglify       = require('gulp-uglify')
var connect      = require('gulp-connect')
var open         = require('gulp-open')

var Paths = {
  HERE                 : './',
  DIST                 : 'dist',
  DIST_TOOLBOX_JS      : 'dist/toolbox.js',
  CSS                  : './src/css/**',
  LESS_TOOLBOX_SOURCES : './src/less/toolbox*',
  LESS                 : './src/less/**/**',
  JS                   : [
      './src/js/bootstrap/transition.js',
      './src/js/bootstrap/alert.js',
      './src/js/bootstrap/affix.js',
      './src/js/bootstrap/button.js',
      './src/js/bootstrap/carousel.js',
      './src/js/bootstrap/collapse.js',
      './src/js/bootstrap/dropdown.js',
      './src/js/bootstrap/modal.js',
      './src/js/bootstrap/tooltip.js',
      './src/js/bootstrap/popover.js',
      './src/js/bootstrap/scrollspy.js',
      './src/js/bootstrap/tab.js',
      './src/js/custom/vendor/modernizr-custom.js',
      './src/js/custom/vendor/chart.js',
      './src/js/custom/vendor/datepicker.js',
      './src/js/custom/vendor/drawer.js',
      './src/js/custom/vendor/moment.min.js',
      './src/js/custom/vendor/fullcalendar.js',
      './src/js/custom/vendor/tablesorter.min.js',
      './src/js/custom/vendor/stickyColumnTables.js',
      './src/js/custom/vendor/quickSearch.js',
      './src/js/custom/chartjs-data-api.js',
      './src/js/custom/application.js',
    ]
}

gulp.task('default', ['less-min', 'js-min', 'move'])

gulp.task('watch', function () {
  gulp.watch(Paths.LESS, ['less-min']);
  gulp.watch(Paths.JS,   ['js-min']);
})

gulp.task('less', function () {
  return gulp.src(Paths.LESS_TOOLBOX_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest('dist'))
})

gulp.task('less-min', ['less'], function () {
  return gulp.src(Paths.LESS_TOOLBOX_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('js', function () {
  return gulp.src(Paths.JS)
    .pipe(concat('toolbox.js'))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('js-min', ['js'], function () {
  return gulp.src(Paths.DIST_TOOLBOX_JS)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('move', function(){
  gulp.src(Paths.CSS)
  .pipe(gulp.dest(Paths.DIST));
});
