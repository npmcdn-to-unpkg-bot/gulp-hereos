var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
const del = require('del'); //clean output resource
var browserSync = require('browser-sync').create();
var paths = {
    pages: ['app/**/*.html', 'app/**/*.css']
};

gulp.task("copy-statics", function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});


//clean dist target folder
gulp.task('clean', () => {
    del(['dist/**/*']);
    console.log('clean task runs');
});


gulp.task("default", ["copy-statics"], function() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['app/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});

// Static server
gulp.task('browser', function() {
    browserSync.init({
        files: ['dist/index.html'],
        server: {
            baseDir: "./dist",
            files: ['**/*/{html,css,js}'],
            routes: {
                "/node_modules": "node_modules"
            }
        }
    });
});