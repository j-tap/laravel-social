const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.less('./node_modules/bootstrap-less/bootstrap/bootstrap.less', './public/themes/default/assets/css/bootstrap.css')
	.less('./public/themes/default/assets/less/style.less','./public/themes/default/assets/css/main.css')
	.combine([
		'./public/themes/default/assets/css/*.css'
	], 'public/themes/default/assets/css/style.css')
	.combine([
		'./public/themes/default/assets/js/*.js',
		], 'public/themes/default/assets/js/main.js')
	.version();
