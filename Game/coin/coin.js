class Coin {
  constructor(posx, posy){
    this.x = posx
    this.y = posy
    this.r = 20
    this.counter = 2
    // this.coinSprite = loadImage('assets/CoinSprites.png', () => {
    //   this.counter++
    // })
    // this.coinJson = loadJSON('assets/json/hehea.json', () => {
    //   this.counter++
    // })
    this.currentFrameIndex = 0
  }

  render(){
    noFill(); 
    ellipse(this.x, this.y, this.r);
    if(this.counter == 2){
      if(this.currentFrameIndex >= coinJson.frames.length){
        this.currentFrameIndex = 0
      }
      let frame = coinJson.frames[Math.floor(this.currentFrameIndex)].frame

      image(coinSprites, this.x, this.y, 20, 20, frame.x, frame.y, frame.w, frame.h)
      this.currentFrameIndex += 0.25
    }
  }

  update(speed){
    this.x -= speed
  }

  collision(player){ 
    if(collideRectCircle(player.x, player.y, player.w, player.h, this.x, this.y, this.r)) {
      return true; 
    }
  }
}
