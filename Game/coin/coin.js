class Coin {
  constructor(posx, posy){
    this.x = posx
    this.y = posy
    this.r = 20
  }

  render(){
    fill(199, 143, 38);
    ellipse(this.x, this.y, this.r); 
  }

  collision(player){ 
    if(collideRectCircle(player.x, player.y, player.w, player.w, this.x, this.y, this.r)) {
      return true; 
    }
  }
}
