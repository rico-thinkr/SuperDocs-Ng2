
var gulp = require('gulp');

gulp.task('copy-js',()=>{
    gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/moment/min/moment.min.js'
    ]).pipe(gulp.dest('./libs/js'));
});
