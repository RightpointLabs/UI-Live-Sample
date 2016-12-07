const gulp = require('gulp'),
    sass = require('gulp-sass');

const uiLive = require('./ui-live')(require('vinyl-ftp'));

gulp.task('html', function () {
    copyHtml();
});

gulp.task('sass', function () {
    compileSass();
});

gulp.task('static', function () {
    copyStatic();
});

gulp.task('watch', function () {
    gulp.watch(['./styles/app.scss'], ['sass']);
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['images/**.*'], ['static']);
});

function compileSass() {
    return gulp
        .src(['./styles/app.scss'], { base: './' })
        .pipe(sass().on('error', sass.logError))
        .pipe(uiLive.toAzure()) // this uploads the file to Azure
        .pipe(gulp.dest('./'));    // this copies the file locally (optional)
}

function copyHtml() {
    return gulp
        .src(['*.html'], { base: './', buffer: false })
        .pipe(uiLive.toAzure()); // this uploads the file to Azure
}

function copyStatic() {
    return gulp
        .src(['./images/**.*'], { base: './', buffer: false })
        .pipe(uiLive.toAzure()); // this uploads the file to Azure
}

// WIP...this doesn't work, want to be able to move all destination logic here
/*function toDestination() {
    return gulp
        .pipe(uiLive.filterNewer()) // this ensures only newer files are uploaded
        .pipe(uiLive.toAzure()) // this uploads the file to Azure
        .pipe(gulp.dest('./local'));    // this copies the file locally (optional)
}*/