var gulp = require('gulp');
var mocha = require('gulp-mocha');

var testFiles = 'test.js';

gulp.task('test1', function (done) {
  gulp.src(testFiles)
  .pipe(mocha({ reporter: 'spec' }))
  .on('error', console.log)
  .on('end', done);
});

gulp.task('test2', function () {
  return gulp.src(testFiles)
  .pipe(mocha({ reporter: 'spec' }))
  .once('error', function () {
    process.exit(1);
  })
  .once('end', function () {
    process.exit();
  });
});
