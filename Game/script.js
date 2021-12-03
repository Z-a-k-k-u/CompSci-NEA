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
var globalSpeed = 3.5

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
  player = new Char(150, 100);
  platforms.push(new Platform(900, 3, 255, 0, 0));
  platforms[0].x = 50
}

function draw() {
  gameTime = millis();
  switch (gameMode) {
    case 1:
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
  bgimage(); 
  platformManager();
  if(frameCount % 600 == 0){
    globalSpeed += 0.1
    console.log("speed increase")
  }
}

function STARTMENU(){
  menu();   
}

function ENDGAME(){
  endscreen(); 
}

function keyPressed(){

  if(player.debug){
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
  }

  if(keyCode === UP_ARROW || keyCode === 32){
    if(!player.jumping || jumps > 0){
      jumps = jumps - 1
      console.log("jumping")
      player.jump();
      player.jumping = true; 
    }
  }
}
