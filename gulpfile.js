/* eslint-disable import/no-extraneous-dependencies */
const { series, parallel } = require('gulp');
const { clean } = require('./tasks/clean');

const { html } = require('./tasks/html');
const { javascript } = require('./tasks/javascript');
const { serve } = require('./tasks/serve');
const { copyStatic } = require('./tasks/copyStatic');

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  exports.default = series(clean, parallel(html, javascript), copyStatic, serve);
} else {
  exports.default = series(clean, parallel(html, javascript), copyStatic);
}
