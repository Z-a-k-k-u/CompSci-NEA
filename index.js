let socketio = require('socket.io');
let express = require('express');
const Database = require("@replit/database")
const db = new Database()

let exp = express();
exp.use(express.static('Game'));
let web = exp.listen(process.env.PORT, function() {
  console.log("Running");
});



let io = socketio(web);


