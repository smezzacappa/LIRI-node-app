require("dotenv").config();
const validCommands = require("./data/commands");
const logic = require("./logic")
const liri = {
    state: {
        command: '',
        query: '',
    },
   
    setCommand: function (command) {
        this.state.command = command;
    },
    setQuery: function (query) {
        this.state.query = query;
    },
    captureInput: function () {
        [node, script, command, ...query] = process.argv
        this.setCommand(command);
        this.setQuery(query.join(" "));
    },
    makeCall: (command, query) => {
        logic.executeCommand(command, query);
    },
    start: function () {
        this.captureInput()
        if(logic.validateCommand(this.state.command, validCommands)){
            this.makeCall(this.state.command, this.state.query);

        }else console.log("Invalid Command Try Again")
        
    },

}

liri.start();