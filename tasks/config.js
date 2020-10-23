const { errorHandler } = require('errorhandler');
const notify = require('gulp-notify');
const { resolve } = require('path');

const build = resolve(__dirname, '../build');

module.exports = {
  output: build,
  notify: {
    errorHandler(err) {
      notify.onError({
        title: 'Error',
        message: err.message
      })(err);
      this.emit('end');
    }
  },
  server: {
    watch: `build`
  },
  scripts: {
    input: resolve(__dirname, '../src/assets/scripts/app.js'),
    watch: [`src/assets/**/*.{js,ts}`, `src/blocks/**/*.{js,ts}`, `src/components/**/*.{js,ts}`],
    output: resolve(__dirname, '../build/scripts')
  },
  pages: {
    input: `src/pages/*.html`,
    watch: [`src/pages/**/*.html`],
    output: `build/`
  },
  static: {
    input: [`src/static/**/*`],
    output: `build/`,
    watch: [`src/static/**/*`]
  },
  NODE_ENV: process.env.NODE_ENV || 'development', // or production
  isProduction: this.NODE_ENV === 'production'
};
