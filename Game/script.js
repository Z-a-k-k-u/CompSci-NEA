let player;
var platforms = [];
let img;
var boxCollider;
let spawning = true
let font; 
let score;
let randomcheck; 
let voidCheck; 
let gameMode = 1
let firstCheck;
let secondCheck
let jumpVelocity;  

p5.disableFriendlyErrors = true;

function preload(){
  preSetup()
}

function setup() {
  allSetup()
}

function draw() {
  switch (gameMode) {
    case 1:
      //console.log("start Menu")
      STARTMENU();
      break;
    case 2:
      MAINGAME();
      break;
  }
}

function MAINGAME(){
  jumpKey(); 
  background(0);
  fill(255);
  rect(0, height - 30, width, 50);
  platformManager();
}

function STARTMENU(){
  menu(); 
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