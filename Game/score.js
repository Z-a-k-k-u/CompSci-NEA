class Score{
  constructor(fc){
    this.fc = fc
    this.score = 0
  }

  showScore(){
    textAlign(LEFT) 
    fill(24, 211, 214)
    textFont(font)
    textSize(14)
    text("Score: " + this.score, 10, 30)
  }

  updateScore(framec){
    this.fc = framec 
    if(this.fc % 3 == 0){
      this.score++ 
    }
  }
}