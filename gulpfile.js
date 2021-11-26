const gulp = require('gulp');
const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');

compileSass.compiler = require('node-sass');

const bundleSass = async () => {
  return src('./assets/scss/style.scss')
  // return src('./assets/scss/**/*.scss')
          .pipe(compileSass().on('error', compileSass.logError))
          .pipe(autoprefixer({
            cascade: false
          }))
          // .pipe(minifyCss())
          .pipe(sourceMaps.write())
          .pipe(concat('style.css'))
          .pipe(dest('./assets/css/'));
};

const devWatch = () => {
  watch('./assets/scss/**/*.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;