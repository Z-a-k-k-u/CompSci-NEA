class Coin {
  constructor(posx, posy){
    this.x = posx
    this.y = posy
    this.r = 12
  }

  render(){
    fill(199, 143, 38);
    ellipse(this.x, this.y, this.r, this.r); 
  }
}