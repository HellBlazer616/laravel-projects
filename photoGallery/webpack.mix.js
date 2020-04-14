const mix = require('laravel-mix');
/* --------------------------------------------------------------------------
 |Mix Asset Management
 |-------------------------------------------------------------------------
 |
  Mi provides a clean, fluent API for defining some Webpack build steps
 | foryour Laravel application. By default, we are compiling the Sass
 | filefor the application as well as bundling up all the JS files.
 |
  */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/gallery.scss', 'public/css')
    .sass('resources/sass/gallery.show.scss', 'public/css')
    .sass('resources/sass/welcome.scss', 'public/css');
