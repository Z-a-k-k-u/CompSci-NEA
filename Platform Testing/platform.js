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
    strokeWeight(2)
    push()
    stroke(9, 255, 0)
    line(this.x, this.y, this.x + this.w, this.y)
    stroke(48, 238, 255)
    line(this.x, this.y, this.x, this.y + this.h + 10)
    pop()
  }

  collision(){
    //do collisiom 
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
