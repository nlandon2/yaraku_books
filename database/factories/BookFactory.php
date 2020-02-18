<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    return [
        'title' => $faker->company,
        'author_id' => rand(1,20),
        'user_id' => factory('App\User')->create()->id,
    ];
});