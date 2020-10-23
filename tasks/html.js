/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const prettyHtml = require("gulp-pretty-html");
const gulpif = require("gulp-if");
const { reload } = require("browser-sync").create();
const config = require("./config");
const isDev = process.env.NODE_ENV === "development";

const copyHTML = cb => {
  const prettyHtmlConfig = {
    indent_size: 4,
    indent_char: " ",
    unformatted: ["code", "em", "strong", "span", "i", "b", "br"],
    content_unformatted: []
  };

  return src(config.pages.input)
    .pipe(plumber(config.notify))
    .pipe(gulpif(isDev, prettyHtml(prettyHtmlConfig)))
    .pipe(dest(config.pages.output))
    .pipe(reload({ stream: true }));

  // cb();
};

exports.html = copyHTML;
