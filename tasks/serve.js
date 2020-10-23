/* eslint-disable import/no-extraneous-dependencies */
const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');
const { html } = require('./html');
const { javascript } = require('./javascript');
const { copyStatic } = require('./copyStatic');

const serve = cb => {
  browserSync.init({
    server: config.output,
    startPath: 'index.html',
    open: false,
    port: 8081
  });

  watch(config.pages.watch).on(
    'change',
    series(html, browserSync.reload)
  );

  watch(config.scripts.watch).on(
    'change',
    series(javascript, browserSync.reload)
  );

  watch(config.static.watch).on(
    'add',
    series(copyStatic, browserSync.reload)
  );

  cb();
};

exports.serve = serve;
