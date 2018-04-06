var gulp = require('gulp'); //Load gulp first

//Load the uglify and rename packages
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint')
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyError = require('gulp-prettyerror'),
    babel = require('gulp-babel');

var input = 'JS/*.js';
var output = './js/transpiled';

//gulp babel task
gulp.task('babel', () => {
    return gulp.src(input)
        .pipe(babel())
        .pipe(gulp.dest(output));
})


//task to compile the scss into css & minify
gulp.task('sass', function() {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(prettyError())
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions']
            })
        )
        .pipe(gulp.dest('./build/css'))
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'))
});  

var reload = browserSync.reload();

gulp.task('lint', function() {
    return gulp.src(['./JS/transpiled/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

//script task to minify, rename and put in build folder
gulp.task('script', gulp.series('lint', function () {
  return gulp.src('./JS/transpiled/*.js') //What files we want gulp to consume
    .pipe(uglify()) // Calls the uglify function on those files
    .pipe(rename({extname: '.min.js'})) //Rename the uglified file
    .pipe(gulp.dest('./build/js')); //Where are we putting the result
}));

//task to watch when a js file is edited, then run script when it is
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('./JS/*.js', gulp.series('babel', 'script'));
 });


//browser sync task
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html','./build/js/*.js', 'build/css/*.css']).on('change', browserSync.reload );
})


//default function that can reference multiple named tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync'));