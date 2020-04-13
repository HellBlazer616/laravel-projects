const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .js('node_modules/popper.js/dist/popper.js', 'public/js')
    .sourceMaps()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/gallery.scss', 'public/css')
    .sass('resources/sass/gallery.show.scss', 'public/css')
    .sass('resources/sass/welcome.scss', 'public/css');
