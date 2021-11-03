let player;
var platforms = [];
let img;
var boxCollider;
let spawning = true
let font; 
let score;
let randomcheck; 
let voidCheck; 
let maxJump = false; 
let maxVelo = -7
let gameMode = 2

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
}

function jumpKey(){
  if (keyIsDown(38)) {
    if (player.jumping == false) {
      if(player.velocity > maxVelo && maxJump == false){
        player.velocity -= 1
        if(player.velocity <= maxVelo){
          maxJump = true;
          player.jumping = true;  
        }
      }
    }
  }
} 
