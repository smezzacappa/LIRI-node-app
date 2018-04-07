const Spotify = require('node-spotify-api');
const key = require("../config/keys").spotify;
const spotify = new Spotify(key);
const getParams = (query) => {
  const object={
    type: 'track',
    query: query
  }
  if(!query){
    object.query="The Sign, Ace of Base";
    object.limit=1;
  }
  return object;
}

const getSong = (query) => {
  const params = getParams(query)
  spotify.search(params, (err, data) => {
    if (err) throw err
    const tracks=data.tracks.items
    tracks.forEach(track=>{
      const artists=track.artists.map(artist=>artist.name);
      console.log(query);
      console.log("artists:  ",artists.join(","));
      console.log("name:  ", track.album.name)
      console.log("url:  ",track.external_urls.spotify)
      console.log("\n");
    })
  });
}

module.exports = getSong