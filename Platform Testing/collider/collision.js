"use strict";
class BoxCollider {
  constructor(rx, ry, rw, rh) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
    this.px = player.x;
    this.py = player.y;
    this.pw = player.w;
    this.ph = player.h;
    this.playerMiddle = {
      x: this.px + this.pw / 2,
      y: this.py + this.ph / 2
    };
    this.platformMiddle = {
      x: this.rx + this.rw / 2,
      y: this.ry + this.rh / 2
    };
    this.vec = createVector(0, 0);
    this.basevec  = createVector(0,0);
    this.anglebetween;
  }

  updatePos;

  updateVector() {
    this.vec.set(this.playerMiddle.x, this.playerMiddle.y);
    this.basevec.set(this.platformMiddle.x, this.platformMiddle.y);
  }

  updateMiddle() {
    this.playerMiddle = {
      x: this.px + this.pw / 2,
      y: this.py + this.ph / 2
    };
    this.platformMiddle = {
      x: this.rx + this.rw / 2,
      y: this.ry + this.rh / 2
    };
  }

  update(rx, ry, rw, rh, px, py, pw, ph) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
    this.px = px;
    this.py = py;
    this.pw = pw;
    this.ph = ph;
  }

  vectorCreate() {
    fill(255, 255, 255);
    ellipse(this.platformMiddle.x, this.platformMiddle.y, 3, 3);
    fill(0, 255, 0);
    ellipse(this.playerMiddle.x, this.playerMiddle.y, 3, 3);
    noStroke();
    stroke(255, 0, 212)
    strokeWeight(2)
    line(this.basevec.x, this.basevec.y, this.basevec.x, this.basevec.y - 50)
    if(this.rx + 60 > this.px && this.rx < this.px + 160){
      noStroke(); 
      stroke(255);
      strokeWeight(2);
      line(this.vec.x, this.vec.y, this.platformMiddle.x, this.platformMiddle.y);
    }
  }
  
  detection() {
    return(this.anglebetween = this.basevec.angleBetween(this.vec))
    //fill(255);
    //text('angle between: ' + this.anglebetween.toFixed(2) + ' radians or ' + degrees(this.anglebetween).toFixed(2) + ' degrees', 10, 50, 90, 50)
  }
}
