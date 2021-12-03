"use strict";
class Char {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 32;
    this.h = 64
    this.gravity = 0.4;
    this.lift = -9;
    this.velocity = 5;
    this.jumping = false;
    this.mspeed = 0
    this.debug = false;
    this.counter = 0
    this.charSprites = loadImage('assets/CharAnims.png', () => {
      this.counter++
    })
    this.charjson = loadJSON('assets/json/CharAnims.json',() => {
      this.counter++
    })
    this.currentFrameIndex = 0
  }

  show() {
    //fill(255, 0, 255);
    noFill()
    rect(this.x, this.y, this.w, this.h);
    //image(playerImg, this.x, this.y);
    if(this.counter == 2){
      if(this.currentFrameIndex >= this.charjson.frames.length){
        this.currentFrameIndex = 0
      }
      let frame = this.charjson.frames[Math.floor(this.currentFrameIndex)].frame

      image(this.charSprites, this.x, this.y, this.w, this.h, frame.x, frame.y, frame.w, frame.h)

      if(!this.jumping){
        this.currentFrameIndex += 0.166
      }
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.mspeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.mspeed;
    }
  }

  jump(){
    this.doAnim = false
    this.jumping = true;
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(!this.debug){
      if (this.y > height || this.x < -30) {
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
