const gulp = require('gulp')
const concat = require('gulp-concat')
const less = require('gulp-less')
const shell = require('gulp-shell')
const connect = require('gulp-connect')

gulp.task('compile-less', () => {
  return gulp.src(['styles/**/*.css', 'styles/**/*.less'])
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build/'))
})

gulp.task('web-build', shell.task('jekyll build --destination ../blog'))

gulp.task('server', () => {
  connect.server({
    root: '../blog',
    port: 4001,
    livereload: true
  });
})

gulp.task('reload', () => {
  connect.reload()
})

gulp.task('start', ['compile-less', 'web-build', 'server'], () => {
  gulp.watch('**/*', ['compile-less', 'web-build', 'reload'])
})