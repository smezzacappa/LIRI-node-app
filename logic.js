const getMovie = require('./calls/omdb');
const getSong = require('./calls/spotify')
const getTweets = require('./calls/twitter')
const readFile = require('./calls/readFile')
const logic = {
    validateCommand: (command, arr) => arr.includes(command),
    spotifythissong: (query) => {
        return getSong(query)
    },
    moviethis: (query) => {
        return getMovie(query);
    },
    dowhatitsays: () => {
        return readFile(query)
    },
    mytweets: () => {
        return getTweets(query)
    },
    convertStringToCommand: (string) => string.replace(/-/g, ''),
}

const executeCommand = (command, query) => {
    command = logic.convertStringToCommand(command)
    const functor = logic[command]
    functor(query)
}

module.exports.executeCommand = executeCommand;
module.exports.validateCommand = logic.validateCommand;