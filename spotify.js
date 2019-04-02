var axios = require('axios');
var fs = require('fs');

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

        var songInfo = `
      Artist(s): ${songData}
      Song Name: ${songData}
      Link: ${songData}
      Album: ${songData}
      ---------------------------------------`
      }
    
      if(!songName) {
        songName = 'The Sign';
      }

    console.log(songInfo); 
    });
  }
}

module.exports = Music;