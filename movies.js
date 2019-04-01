var axios = require('axios');

function Movies() {
  this.findMovie = function(movie) {
    var URL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=trilogy'

    axios
    .get(URL)
    .then(function(response) {
      var movieResults = response.data;
      
      var movieDets = `
    Title: ${movieResults.Title}
    Release Year: ${movieResults.Year}
    IMDb Rating: ${movieResults.imdbRating}
    Rotten Tomatoes Rating: ${movieResults.Ratings[1].Value}
    Country Produced: ${movieResults.Country}
    Language: ${movieResults.Language}
    Plot: ${movieResults.Plot}
    Actors: ${movieResults.Actors}
    -------------------------------------------------------
    `

    console.log(movieDets);
    })
  }
}

module.exports = Movies;