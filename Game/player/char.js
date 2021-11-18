"use strict";
class Char {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35;
    this.gravity = 0.4;
    this.lift = -9;
    this.velocity = 5;
    this.jumping = false;
    this.mspeed = 0
    this.debug = true;
  }

  show() {
    noStroke();
    fill(255, 0, 255);
    rect(this.x, this.y, this.w, this.w);

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.mspeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.mspeed;
    }
  }

  jump(){
    this.jumping = true;
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(!this.debug){
      if (this.y > height) {
        gameMode = 3
      }
    } else if(this.debug){
       if (this.y > height - 65) {
        this.y = height - 65;
        this.velocity = 0;
        this.jumping = false;
       }
    }
  }
}
