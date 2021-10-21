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
    //fill(255);
    //ellipse(this.x + this.w / 2, this.y + this.h / 2, 3, 3);
    //console.log(this.w)
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
