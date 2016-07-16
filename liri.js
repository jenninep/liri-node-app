// At the top of the liri.js file, write the code you need
// to grab the data from keys.js. Then store the keys in a variable.
// 

// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.


var fs = require('fs');
var keys = require('./keys').twitterKeys;
var tweets = require('./twitter');
var imported_movie_command = require('./omdb').movie_command;
var imported_spotify_this_song = require('./spotify').spotify_this_song;

fs.readFile('random.txt', 'utf8', function (err, data){
	if(err) {
		return console.error(err);
	}
	var randomArray = data.split(',');
	console.log(imported_spotify_this_song(randomArray[1]));
})
// var movieModule = require('./omdb');
// var imported_movie_command = movieModule.movie_command;


// movie-this
// ************Structure of the console command**********
// node liri.js movie-this '<movie name here>'
// getting the command arg
var command = process.argv[2];
var commandArg = process.argv[3];

// confirm that console command works properly
// console.log(command);





// if the user calls movie this
// then do something
// confirms that movie-this is the command/process.argv[2]
if (command === 'movie-this') {
    // setting movie title
    var mTitle = commandArg;
    console.log("the movie title is ", mTitle);
    // invoke imported_movie_command with mTitle
    imported_movie_command(mTitle);


    // console.log('successfully called movie function');
} else if (command === 'twitter') {
	tweets.getTweets(process.argv[3]);
}else if (command === 'spotify_this_song') {
	var songName = commandArg;
	imported_spotify_this_song(songName);

};

