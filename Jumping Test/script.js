let x = 400
let p; 

function setup() {
  createCanvas(600,400);
  background(0);
  p = new Char(110,100);
}


function draw(){
  background(0);
  fill(255);
  rect(0,height - 30,width,50)
  p.update(); 
  p.show();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(p.jumping == false){
      p.velocity = p.lift;
      console.log("Jumping")
      p.jumping = true;
    }
  }
}


