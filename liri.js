// At the top of the liri.js file, write the code you need
// to grab the data from keys.js. Then store the keys in a variable.
// 
var keys = require('./keys').twitterKeys;
var tweets = require('./twitter');
// var movieModule = require('./omdb');
// var imported_movie_command = movieModule.movie_command;
var imported_movie_command = require('./omdb').movie_command;

// movie-this
// ************Structure of the console command**********
// node liri.js movie-this '<movie name here>'
// getting the command arg
var command = process.argv[2];

// confirm that console command works properly
console.log(command);





// if the user calls movie this
// then do something
// confirms that movie-this is the command/process.argv[2]
if (command === 'movie-this') {
    // setting movie title
    var mTitle = process.argv[3];
    console.log("the movie title is ", mTitle);
    // invoke imported_movie_command with mTitle
    imported_movie_command(mTitle);


    // console.log('successfully called movie function');
} else if (command === 'twitter') {
	tweets.getTweets(process.argv[3]);
}

// This will output the following information to your terminal/bash window:

// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// Rotten Tomatoes Rating.
// Rotton Tomatoes URL
// 
// make an omdb request via request
// 
// 
// 
// 
// 
// 
// 
// ************* WITHOUT EXPORTS ***********///
// 
//var request = require('request');

//function getMovie(title) {
//// var title;
//// var year;
//// var rating;

//var titleParam = title;
//// /assugning request url using that title
//var omdbUrl = "http://www.omdbapi.com/?t=" + title;
//request(omdbUrl, function(error, response, body) {
// if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
// }
//})
//// body...
// }


//if (command === 'movie-this') {
//// setting movie title
//var mTitle = process.argv[3];
//console.log("the movie title is ", mTitle);
//// invoke imported_movie_command with mTitle
//getMovie(mTitle);


//console.log('successfully called movie function');
// }
// ************* WITHOUT EXPORTS ***********///