const request = require('request');
const path = "";
const key = require("../config/keys").omdb
const basePath = "http://www.omdbapi.com/?"

const getParams = (query) => {
    return '&apikey=' + key + '&t=' + query + "&r=json"
}

const getMovie = (query) => {
    if(!query) query = "Mr. Nobody"
    const path = basePath + getParams(query)
    return request(path, function (error, response, body) {
        if (error) throw error
        const movie = JSON.parse(body)
        const ratings = movie.Ratings
            .filter(val => val.Source === "Rotten Tomatoes")
            .map(rating => rating.Value);

        console.log("\n");    
        console.log("Movie Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("IMDb Rating: " + movie.imdbRating);
        console.log("Rotten Tomatoes Rating: " + ratings);
        console.log("Country: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        console.log("IMDb Link:", "http://www.imdb.com/title/" + movie.imdbID + "/")
        console.log("\n");
    });

}
module.exports = getMovie