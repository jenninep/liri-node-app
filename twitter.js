var request = require('request');
var keys = require("./keys.js");
var Twitter = require("twitter");

function getTweets() {

	var params = {
		screen_name: '@keepMemorabilia',
		count: 20
	};

	var client = new Twitter ({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret

	});

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) {
	    console.error(error);
	  } else {
	  	console.log(tweets[0]);
	  }
	});

}

// 	var client = new Twitter ({
// 		consumer_key: keys.twitterKeys.consumer_key,
// 		consumer_secret: keys.twitterKeys.consumer_secret,
// 		access_token_key: keys.twitterKeys.access_token_key,
// 		access_token_secret: keys.twitterKeys.access_token_secret

// 	});
// }

exports.getTweets = getTweets;