require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys');
var Music = require('./spotify');
var Movies = require('./movies');

var spotify = new Spotify(keys.spotify);
var music = new Music();
var movies = new Movies();

var search = process.argv[2];
var searchItem = process.argv.slice(3).join(' ');

switch(search) {
  case 'concert-this':
    console.log('Searching concerts ...');
    music.musician(searchItem);
    break;
  case 'spotify-this-song':
    console.log('Searching songs ...');
    music.song(searchItem);
    break;
  case 'movie-this':
    console.log('Searching movies ...');
    movies.findMovie(searchItem);
    break;
  case 'do-what-it-says':
    console.log('Searching for "I Want it That Way"')
    music.song('I Want it Thaw Way');
    break;
  default:
    console.log('Please enter "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says"');
    break;
}