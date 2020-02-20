<?php

namespace App\Http\Controllers;

use App\Author;
use App\Book;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Author $author)
    {
        $authors = $author->orderBy('created_at', 'desc')->get();
		return response()->json([
			'authors' => $authors,
		]);
    }

    public function ascendIndex(Request $request, Author $author)
    {
        $books = $author
        ->join('books', 'books.author_id', '=', 'authors.id')->orderBy('name', 'asc')->get();
        
		return response()->json([
            'books' => $books,
		]);
    }

    public function descendIndex(Request $request, Author $author)
    {
        $books = $author
        ->join('books', 'books.author_id', '=', 'authors.id')->orderBy('name', 'desc')->get();
        
		return response()->json([
            'books' => $books,
		]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $author = Author::findOrFail($id);
		return response()->json([
			'author' => $author,
		]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function edit(Author $author)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
		$author = Author::findOrFail($id);
		$author->update($input);
		return response()->json([
			'author' => $author,
		]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function destroy(Author $author)
    {
        //
    }
}
