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

Route::get('/books', 'BookController@index');
Route::get('/authors', 'AuthorController@index');

Route::get('/books/ascend', 'BookController@ascendIndex');
Route::get('/books/descend', 'BookController@descendIndex');

Route::get('/authors/ascend', 'AuthorController@ascendIndex');
Route::get('/authors/descend', 'AuthorController@descendIndex');

Route::get('/authors/{id}','AuthorController@show');
Route::get('/books/{id}','BookController@show');


Route::resource('books', 'BookController');
Route::put('/authors/{id}','AuthorController@update');