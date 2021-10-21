class Char{ 
    constructor(x,y){
      this.x = x
      this.y = y
      this.gravity = 0.5;
      this.lift = -10;
      this.velocity = 4;
      this.jumping = false; 
    }
  
    show(){
      fill(255,0,255)
      rect(this.x,this.y,25,25)
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 0;
      } else if(keyIsDown(RIGHT_ARROW)){
        this.x += 0;
      }
    }
  
    update() {
      this.velocity += this.gravity;
      this.y += this.velocity;
  
      if (this.y > height - 55) {
        this.y = height - 55;
        this.velocity = 0;
        this.jumping = false; 
      }
    }
  }