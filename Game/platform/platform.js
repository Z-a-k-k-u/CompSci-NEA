class Platform {
  constructor(w, voidw, red, green, blue) {
    this.x = width;
    this.h = 30;
    this.speed = 4.5; //3.5
    this.w = w;
    this.y = height - 150;
    this.r = red;
    this.g = green;
    this.b = blue;
    this.voidw = voidw
    this.voidx; 
    this.platformtype = {
      typeOne: {width: 140},
      typeTwo: {width: 160},
      typeThree: {width: 180},
      typeFour: {width: 200},
      typeFive: {width: 220}
    }
    this.voidwidth = {
      voidOne: {width: 100},
      voidTwo: {width: 200},
      voidThree: {width: 300}
    }
    this.platformCoins = undefined; 
  }

  show() { 
    switch(this.w){
      case 1:
        this.w = this.platformtype.typeOne.width
        break;
      case 2:
        this.w = this.platformtype.typeTwo.width
        break;
      case 3:
        this.w = this.platformtype.typeThree.width
        break;
      case 4:
        this.w = this.platformtype.typeFour.width
        break;
      case 5:
        this.w = this.platformtype.typeFive.width
        break; 
    }

    switch(this.voidw){
      case 1:
        this.voidw = this.voidwidth.voidOne.width
        break;
      case 2:
        this.voidw = this.voidwidth.voidTwo.width
        break;
      case 3: 
        this.voidw = this.voidwidth.voidTwo.width 
        break; 
    }

    this.voidx = this.x + this.w;

    fill(this.r, this.g, this.b, 170);
    rect(this.x, this.y, this.w, this.h);

    fill(255,0,0, 50);
    rect(this.voidx, this.y, this.voidw, this.h);

    push();
    fill(0,255,9, 1);
    stroke(255,0,0);
    rect(this.x, this.y, this.w, this.h - 25);
    stroke(48, 238, 255);
    rect(this.x - 2, this.y + 4, this.w - (this.w - 3), this.h + 10);
    pop(); 

    if(this.platformCoins !== undefined){
      for(var c = 0; c < this.platformCoins.length; c++){ 
        this.platformCoins[c].render()
      }
    }
  }

  collideTop(player){ //collision top
    if(collideRectRect(this.x, this.y, this.w, this.h - 25, player.x, player.y, player.w, player.w)){
      return true;
    }
  }

  collideSide(player){ //collision side
    if(collideRectRect(this.x - 2, this.y + 4, this.w - (this.w - 3), this.h + 10, player.x, player.y, player.w, player.w)){
      return true; 
    }
  }

  update(millis) {
    console.log(millis)
    if(millis % 5000 == 0){
      this.speed =+ 0.1
      console.log("Speed Increase - Speed is now: " + this.speed)
    }
    this.x -= this.speed;
  }

  coinrender(player, score,){
    if(this.platformCoins !== undefined){
      for(let c = 0; c < this.platformCoins.length; c++){ 
        this.platformCoins[c].update(this.speed)

        if(this.platformCoins[c].collision(player)){
          this.platformCoins.splice(c , 1)
          console.log("Coin go Poof")
          score.score = score.score + 100;
          coinsCollected++
        }
      }
    }
  }

  off() {
    //console.log("Offscreen")
    if (this.x < -this.w - this.voidw) {
      return true;
    } else {
      return false;
    }
  }
}
