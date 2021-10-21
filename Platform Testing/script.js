let player;
let platforms = [];
let img;
var boxCollider;

p5.disableFriendlyErrors = true;


function setup() {
  createCanvas(800, 500);
  background(0);
  player = new Char(110, 100);
  platforms.push(new Platform(200, 255, 0, 0));
  boxCollider = new BoxCollider(200, 255, 0, 0);
  img = loadImage("assets/platform2.png")
}

function draw() {
  background(0);
  fill(255);
  rect(0, height - 30, width, 50);

  if (frameCount % 60 == 0) {
    platforms.push(new Platform(floor(random(80, 120)), 200, 50, 20));
    //console.log("Pushed New Platform")
    //console.log(platforms.length)
  }

  player.update();
  player.show();

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    platforms[i].update();
    collisionmanager(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h); 

    if (platforms[i].off()) {
      platforms.splice(i, 1);
    }
  }
  
  fill(255);
  text('angle between: ' + boxCollider.anglebetween.toFixed(2) + ' radians or ' + degrees(boxCollider.anglebetween).toFixed(2) + ' degrees', 10, 50, 90, 50)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (player.jumping == false) {
      player.velocity += player.lift;
      console.log("Jumping");
      player.jumping = true;
    }
  }
}
