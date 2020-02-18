<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function books() {
        return $this->hasMany(Book::class);
    }
}
