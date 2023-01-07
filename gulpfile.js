const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const del = require('del');

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'))
});

gulp.task('browserSync', function (done) {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    });
    done();
})

gulp.task('watch', gulp.series('browserSync', 'sass', function () {
    gulp.watch('src/**/*.scss', gulp.series('sass'));
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.scss').on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
}));

gulp.task('build', () => {
    return Promise.all([
        gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/')),
        gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist')),
        gulp.src('./src/*.js')
        .pipe(gulp.dest('./dist'))
    ])
});

gulp.task('clean', () => {
    return del([
        'src/style.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'build']));