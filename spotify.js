// var request = rewuire('request');
var spotify = require('spotify');

// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to

// "The Sign" by Ace of Base
// 
// API Examples:
// var spotify = require('spotify');
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

//     // Do something with 'data' 
// });
// 
// use search for title of track
// https://developer.spotify.com/web-api/search-item/
// 
// write a function spotifySong;
// node liri.js spotify-this-song '<song name here>'
function spotifySong(songParam) {
    if (!songParam) {
        songParam = "The Sign";
    }
console.log(songParam);
    // var artist;
    // var songNAme;
    // var link;
    // var album;
    // use the spotify search function to grab song title
    spotify.search({
        type: 'track',
        query: songParam
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        // Do something with 'data' 
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Album Name: " + data.tracks.items[0].album.name);
        console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log("Preview URL: " + data.tracks.items[0].preview_url);

        // console.log(JSON.stringify(data, null, 2));


    });
}

module.exports.spotify_this_song = spotifySong;
// from liri
// var spot_command = require(./spotify).spot_command;
// spot_command(process.argv[3]);





//