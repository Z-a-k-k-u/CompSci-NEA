let socketio = require('socket.io');
let express = require('express');
const sql = require('sqlite3').verbose();


let db = new sql.Database('HighScores.db', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Conntected to Database")
});

db.run('CREATE TABLE IF NOT EXISTS highscores (id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT NOT NULL,score INTERGER NOT NULL);', (err) => {
  if (err){
    console.log("Table go oopsie - ", err)
  }
});

let exp = express();
exp.use(express.static('Game'));
let web = exp.listen(process.env.PORT, function() {
  console.log("Running");
});

let io = socketio(web);

io.on("connection", (socket) => {
  console.log("Conneected to - " + socket.id)

  socket.on("disconnect", () => {
    console.log("Disconnected from - " + socket.id)
  })

  socket.on("submitHighScore", (data) => {
    db.run("INSERT INTO highscores(username, score) VALUES(?,?)", [data.username, Number(data.score)], (err) => {
      if(!err){
        console.log(data.username + " Submitted a score of - " + data.score)
      } else {
        console.log("Error Adding player score " + err)
      }
    })
  })

  socket.on('getHighScores', () => {
    db.all('SELECT username, score FROM highscores ORDER BY score DESC LIMIT 8 ', [], (err, rows) => {
      if (err) {
        console.log("Error Grabbing user data from table - " + err)
      }
      console.log("Grabbing High Scores")
      socket.emit('highscores', rows)
    })
  })  
}); 