class Platform {
  constructor(w, red, green, blue) {
    this.x = width;
    this.h = 30;
    this.speed = 3.5; //3.5
    this.w = w;
    this.y = height - 150;
    this.r = red;
    this.g = green;
    this.b = blue;
  }

  show() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
    push()
    fill(0,255,9)
    rect(this.x, this.y, this.w, this.h - 28)
    stroke(48, 238, 255)
    rect(this.x, this.y, this.w - (this.w - 1), this.h + 10)
    pop()
  }

  collisionTop(){
    if(collideRectRect(this.x, this.y, this.w, this.h - 28, player.x, player.y, player.w, player.w)){
      return true; 
    }
  }

  collisionSide(){
    if(collideRectRect(this.x, this.y, this.w - (this.w - 1), this.h + 10, player.x, player.y, player.w, player.w)){
      return true; 
    }
  }

  update() {
    this.x -= this.speed;
  }

  off() {
    //console.log("Offscreen")
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
