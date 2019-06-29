require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');

//var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv.slice(3).toString();

switch (command) {
    case 'concert-this':
        concertThis(input);
        break;
    case 'spotify-this-song':
        spotifyThis(input);
        break;
    case 'movie-this':
        movieThis(input);
        break;
    case 'do-what-it-says':
        doThis();
        break;
    default:
        console.log('Enter one of the following commands: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says')
};

function concertThis(input) {
    axios.get('https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp')
        .then(function (response) {
            // handle success
            
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
};