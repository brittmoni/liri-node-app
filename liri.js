require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys');
// var Music = require('./spotify');
var Movies = require('./movies');
var axios = require('axios');

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
    music.song('I Want it That Way');
    break;
  default:
    console.log('Please enter "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says"');
    break;
}

function Music() {
  this.musician = function(artist) {
    var URL = 'https//rest.bandsintown.com/artists/' + artist + '/events?app_id=' + spotify;

    axios
      .get(URL)
      .then(function(err, response) {
        var results = response.data[0];

        var artistEvents = `
      Venue Name: ${results.venue.name}
      Venue Location: ${results.venue.city}
      Event Date: ${results.datetime}
      ----------------------------------------
      `

      if (err) {
        console.log(err);
      }

      console.log(artistEvents);
      })
  }
  
    this.song = function(songName){
    spotify.search({ type: 'track', query: songName, limit: 7 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      } else {
        var songData = data.tracks.items;

        songData.forEach(function(result) {
          console.log(`
      Artist(s): ${songData.artists[0].name}
      Song Name: ${songData.name}
      Link: ${songData.preview_url}
      Album: ${songData.album.name}
      ---------------------------------------`);
        });
      }
    
      if(!songName) {
        songName = 'The Sign';
      } 
    });
  }
}


