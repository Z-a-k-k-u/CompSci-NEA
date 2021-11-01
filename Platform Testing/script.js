let player;
var platforms = [];
let img;
var boxCollider;
let spawning = true
let font; 

//p5.disableFriendlyErrors = true;

function preload(){
  preSetup()
}

function setup() {
  allSetup()
}

function draw() {
  background(0);
  fill(255);
  rect(0, height - 30, width, 50);

  if (frameCount % 60 == 0 && spawning == true) {
    platforms.push(new Platform(floor(random(80, 120)), 200, 50, 20));
    //console.log("Pushed New Platform")
    //console.log(platforms.length)
  }

  player.update();
  player.show();

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if(spawning == true){
      platforms[i].update();
    }

    if (platforms[i].off()) {
      platforms.splice(i, 1);
    }

    if(platforms[i].collideSide(player)){ 
      player.x = platforms[i].x - player.w
    }else if(platforms[i].collideTop(player)){ 
      player.y = 315
      player.velocity = 0;
      player.jumping = false
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (player.jumping == false) {
      player.velocity += player.lift;
      player.jumping = true;
    }
  }

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
