<?php

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
    return view('books');
});

Route::get('/home', function () {
    return view('books');
});

Auth::routes();

Route::get('/books', 'BookController@index')->name('books');
Route::get('/authors', 'AuthorController@index')->name('authors');
