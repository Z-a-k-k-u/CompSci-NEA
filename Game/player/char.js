"use strict";
class Char {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35;
    this.gravity = 0.4;
    this.lift = -10;
    this.velocity = 5;
    this.jumping = false;
    this.mspeed = 2
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

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height - 65) {
      this.y = height - 65;
      this.velocity = 0;
      this.jumping = false;
    }
  }
}
