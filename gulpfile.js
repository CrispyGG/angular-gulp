var gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence')
	eslint = require('gulp-eslint'),
	git = require('gulp-git');

gulp.task('lint', () => {
	return gulp.src('src/scripts/modules/*.js')
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

gulp.task('clean', function() {
	return del(['dist/**','!dist']);
});

gulp.task('copyToDist', function() {
	return gulp.src('./src/**')
	.pipe(gulp.dest('./dist'));
});

gulp.task('build', function() {
	runSequence('lint','clean','copyToDist');
});



