var gulp         = require('gulp');
var open         = require("gulp-open");
var connect      = require('gulp-connect');
var typescript   = require('gulp-tsc');
var plumber      = require('gulp-plumber');
var livereload   = require('gulp-livereload');

var config = {
    port: 9005
};

gulp.task('ts', function () {
    return gulp.src([
            './src/**/*.ts',
            './node_modules/Phaser/build/phaser.d.ts'
        ])
        .pipe(plumber())
        .pipe(typescript({
            sourcemap: true,
            out: 'app.js',
            outDir: './build/'
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(livereload())
        .pipe(connect.reload());
});

gulp.task('serve', function(){
    connect.server({
        port: config.port,
        livereload: true
    });
});

gulp.task('open', function() {
    var options = {
        url: "http://localhost:" + config.port,
        app: "chrome"
    };
    return gulp.src("./index.html").pipe(open("", options));
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.ts', ['ts']);
});

gulp.task('default', ['ts', 'watch', 'serve', 'open']);