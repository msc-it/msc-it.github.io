var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');

gulp.task('generate-sw', function(callback) {
  swPrecache.write('service-worker.js', {
    staticFileGlobs: ['**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
    navigateFallback: '/'
  }, callback);
});