let player;
var platforms = [];
let img;
var boxCollider;
let spawning = true
let font; 
let score;
let randomcheck; 
let voidCheck; 
let gameMode = 1;
let firstCheck;
let secondCheck
let jumpVelocity;  
let canvase; 
let canCoinSpawn; 
let whatCoinPattern;
const socket = io();
let returnedHighscores = null; 
let coinsCollected = 0; 
var gameTime;
let jumps = 2;

p5.disableFriendlyErrors = true;

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("highscores", (arg) => {
  returnedHighscores = arg
});

function submitPlayerScore(d){
  socket.emit("submitHighScore", {username: d.value, score: score.score})
}

function preload(){
  preSetup()
}

function setup() {
  allSetup()
}

function gameInit(){
  platforms = [];
  score.score = 0
  coinsCollected = 0
  player = new Char(110, 100);
  platforms.push(new Platform(900, 3, 255, 0, 0));
  platforms[0].x = 50
}

function draw() {
  gameTime = millis();
  switch (gameMode) {
    case 1:
      //console.log("start Menu")
      STARTMENU();
      break;
    case 2:
      MAINGAME();
      break;
    case 3:
      ENDGAME();
      break;
  }
}

function MAINGAME(){
  background(0);
  platformManager();
}

function STARTMENU(){
  menu(); 
}

function ENDGAME(){
  endscreen(); 
}

function keyPressed(){

  if (keyCode === 77){
    player.y = 100
    player.x = 110
  }

  if(keyCode === 78){
    if(spawning == true){
      spawning = false
    } else{
      spawning = true
    }
  }

  if(keyCode === 66){
    usernameInputBox.hide();
    submitScoreButton.hide(); 
  }

  if(keyCode === UP_ARROW){
    if(!player.jumping || jumps > 0)
      player.jump();
      player.jumping = true; 
      jumps--
  }
}
