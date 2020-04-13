<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/picture', 'ImageController@store');

Route::get('/gallery', 'GalleryController@index');
Route::post('/gallery', 'GalleryController@store');
Route::get('/gallery/{gallery}', 'GalleryController@show');
Route::delete('/gallery/{gallery}', 'GalleryController@destroy');
