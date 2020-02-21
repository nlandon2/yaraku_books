# YarakuBooks 

## About 

YarakuBooks is an application designed for Yaraku's challenge that lets you record books with their titles and authors. It lets you create and delete books, update the names of authors, sort through the list in alphabetical order, search for books, and export titles and authors in CSV or XML.

## Accessing the App

A deployed version can be reached with this link: http://evening-anchorage-71364.herokuapp.com/

## Accessing Code

The code can be accessed locally as well using `git clone https://github.com/nlandon2/yaraku_books.git` 

Run `composer install` as well as `npm install` to install dependencies.

Next, set MySQL configuration variables in your `.env` file, and run `php artisan migrate` to obtain tables.

Finally, run `php artisan serve` and `npm run watch`, and then the website can be accessed locally.

## Technologies
- Front-end: Javascript, React, Bootstrap
- Back-end: PHP, Laravel
- Deployment: Heroku
- Database: MySQL
