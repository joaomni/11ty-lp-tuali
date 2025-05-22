const { src, dest, series } = require('gulp')
// const uglify = require('gulp-uglify')
const minifyHtml = require('gulp-minify-html')
const cssnano = require('gulp-cssnano')

// Minify HTML
const buildHTML = () => {
	return src('./*.html') // Caminho ajustado
		.pipe(minifyHtml())
		.pipe(dest('./')) // Sobrescreve os arquivos originais
}
// CSSNano
const buildCSS = () => {
	return src('./css/*.css').pipe(cssnano()).pipe(dest('./css/'))
}
/** 
// Babel
const buildBabel = () => {
  return src('./js/*.js')
    .pipe(babel())
    .pipe(dest('./js/'));
};

// Uglify
const buildJS = () => {
  return src('./js/*.js')
    .pipe(uglify())
    .pipe(dest('./js/'));
};
**/

exports.buildDev = series(buildHTML, buildCSS)
