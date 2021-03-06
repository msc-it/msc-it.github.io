var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');

gulp.task('generate-sw', function(callback) {
  swPrecache.write('service-worker.js', {
    staticFileGlobs: [
      '_dist/**/*.{html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}',
      '!node_modules',
      '!node_modules/**',
    ],
    stripPrefix: "_dist",
    navigateFallback: '/'
  }, callback);
});