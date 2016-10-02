const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const browserSyncSpa = require('browser-sync-spa');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const reload = browserSync.reload;


browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*min.js'])
  	.pipe(plumber())
  	.pipe(browserSync.stream());
});

gulp.task('html', function() {
  gulp.src('app/**/*.html')
  	.pipe(plumber())
  	.pipe(browserSync.stream());
});

gulp.task('serve', function() {

    browserSync.init({
    	stream: true,
      server: {
        baseDir: 'app',
        routes: {
		      '/bower_components': 'bower_components'
		    }
      },
      startPath: '/',
    });

    gulp.watch("app/**/*.html").on("change", reload);
    gulp.watch("app/js/**/*.js").on("change", reload);

});


gulp.task('default', ['clean', 'build']);

// Delete /dist directory and its contents
gulp.task('clean', function() {
  gulp.src('dist/')
    .pipe(plumber())
    .pipe(clean())
});

// Minify and move to /dist
gulp.task('build', function() {
  gulp.src(['app/**/*.html'])
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

    gulp.src(['app/**/*.js'])
    .pipe(plumber())
    .pipe(minify({ext: {src: '*', min: '.js'}}))
    .pipe(gulp.dest('dist'));

  gulp.src(['bower_components/**/*'])
    .pipe(plumber())
    .pipe(gulp.dest('dist/bower_components'));
});


gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./fonts'));






