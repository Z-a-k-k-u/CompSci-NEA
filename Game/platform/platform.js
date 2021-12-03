class Platform {
  constructor(w, voidw, red, green, blue) {
    this.x = width;
    this.h = 30;
    this.speed = 3.5; //3.5
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
    this.platformImg = platformImageSpecial;
  }
 
  show() { 
    switch(this.w){
      case 1:
        this.w = this.platformtype.typeOne.width
        this.platformImg = platformImage1
        console.log("Platform 1")
        break;
      case 2:
        this.w = this.platformtype.typeTwo.width
        this.platformImg = platformImage2
        console.log("Platform 2")
        break;
      case 3:
        this.w = this.platformtype.typeThree.width
        this.platformImg = platformImage3
        console.log("Platform 3")
        break;
      case 4:
        this.w = this.platformtype.typeFour.width
        this.platformImg = platformImage4
        console.log("Platform 4")
        break;
      case 5:
        this.w = this.platformtype.typeFive.width
        this.platformImg = platformImage5
        console.log("Platform 5")
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
    image(this.platformImg, this.x, this.y)

    // fill(255,0,0, 50, 255);
    // rect(this.voidx, this.y, this.voidw, this.h);

    if(this.platformCoins !== undefined){
      for(var c = 0; c < this.platformCoins.length; c++){ 
        this.platformCoins[c].render()
      }
    }
  }

  collideTop(player){ //collision top
    if(collideRectRect(this.x, this.y, this.w, this.h - 25, player.x, player.y, player.w, player.h)){
      return true;
    }
  }

  collideSide(player){ //collision side
    if(collideRectRect(this.x - 2, this.y + 4, this.w - (this.w - 3), this.h + 10, player.x, player.y, player.w, player.h)){
      return true; 
    }
  }

  update(speed) {
    this.x -= speed;
  }

  coinrender(player, score, speed){
    if(this.platformCoins !== undefined){
      for(let c = 0; c < this.platformCoins.length; c++){ 
        this.platformCoins[c].update(speed)

        if(this.platformCoins[c].collision(player)){
          this.platformCoins.splice(c , 1)
          console.log("Coin go Poof")
          score.score = score.score + 10;
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
