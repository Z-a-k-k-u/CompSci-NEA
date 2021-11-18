let startButton;

function menu(){ //finish menu add button class to create your damn buttons
  background(0);
  noStroke(); 
  fill(255)
  textFont(font) 
  textSize(48)
  textAlign(CENTER)
  text("(Game Name)", width/2, 100)
  startButton.show(); 
}

function startMenuButtons(){
  startButton = createButton("Play")
  startButton.parent("middlediv")
  startButton.id("startButton")
  startButton.position(width/2 - 99, height - 70)
  startButton.mousePressed(switchToGame)
  startButton.hide(); 
};

function switchToGame(){
  gameMode = 2
  startButton.hide(); 
}