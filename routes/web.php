<?php

use App\User;
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

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');

Route::post('/picture/{gallery}', 'ImageController@store');

Route::get('/gallery', 'GalleryController@index');
Route::post('/gallery', 'GalleryController@store');
Route::get('/gallery/{gallery}', 'GalleryController@show');
Route::delete('/gallery/{gallery}', 'GalleryController@destroy');

Route::get('asd', function (User $user) {
    $user = App\User::find(1);
    $img = App\Image::find(1);
    $gallery = $user->galleries()->where('id', 2)->get();
    $image = $user->images()->get();
    ddd($img->gallery->user_id);
});
