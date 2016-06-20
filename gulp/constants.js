'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var fs = require('fs');

var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var memory = {}; // we'll keep our assets in memory
var myEnv = 'dev';


gulp.task('constants:config', function() {
    return gulp.src('config.json')
        .pipe($.tap(function(file) {
            var config = JSON.parse(file.contents.toString());
            memory.CONFIG = config;
        }));
});



gulp.task('constants:generate', function() {
    return $.ngConstant({
            name: 'constants',
            constants: memory,
            stream: true
        })
        .pipe($.rename('app.constants.js'))
        .pipe(gulp.dest(path.join(conf.paths.src, 'app')));
});



gulp.task('constants:dev',function(cb){
    runSequence('constants:config', 'constants:generate',cb)
});


gulp.task('constants:prod', function() {
    myEnv = 'prod';
    runSequence('constants:config', 'constants:urls', 'constants:i18n', 'constants:generate');
});

