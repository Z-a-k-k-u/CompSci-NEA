let socketio = require('socket.io');
let express = require('express');

let exp = express();
exp.use(express.static('Platform Testing'));
let web = exp.listen(process.env.PORT, function() {
  console.log("Running");
});

let io = socketio(web);