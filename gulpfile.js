var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');
var uglify = require('gulp-uglify');

gulp.task('cssnano', function() {
  return gulp.src('app/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
  return gulp.src('app/img/*.+(png|jpg)')
    // local machine having some issues installing mozjpeg
    // .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('js', function() {
  return gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('cname', function() {
  return gulp.src('app/CNAME')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  runSequence('clean:dist', ['cname', 'html', 'cssnano', 'img', 'js']);
});

gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages({ branch: 'master' }));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});
