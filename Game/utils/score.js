class Score{
  constructor(fc){
    this.fc = fc
    this.score = 0
  }

  showScore(coins){
    textAlign(LEFT) 
    fill(24, 211, 214)
    textFont(font)
    textSize(14)
    text("Score: " + this.score, 10, 30)
    fill(212, 175, 55)
    text("Coins: " + coins, 10, 50)
  }

  updateScore(framec){
    this.fc = framec 
    if(this.fc % 10 == 0){
      this.score++ 
    }
  }
}