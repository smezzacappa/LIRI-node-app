const fs = require('fs');
const logic = require("../logic");
const path = "data/random.txt";
const encode = "utf8";

const readFile = () => {
    return fs.readFile(path, encode, (err, data) => {
        if (err) throw err
        const inputs = data.split(",");
        logic.executeCommand(inputs[0], inputs[1]);
    })
}

module.exports = readFile