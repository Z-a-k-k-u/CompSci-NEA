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

function draw() {
  gameDeltaTime = gameDeltaTime + millis(); 
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
  jumpKey(); 
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
    firstCheck = millis();
  }
}

function keyReleased(){
  if(keyCode === UP_ARROW){
    player.velocity = jumpVelocity
  }
}

function jumpKey(){
  if (keyIsDown(UP_ARROW) && player.jumping == false) {
    secondCheck = millis()
    if(secondCheck - firstCheck > 100) {
      jumpVelocity = -10 
    } else {
      jumpVelocity = -8
    }
  }
} 