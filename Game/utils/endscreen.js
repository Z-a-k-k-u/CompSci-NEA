let usernameInputBox
let submitScoreButton
let username = document.getElementById('usernameTextBox');
let showscores = false
let backToMenuButton; 

function endscreen(){
  background(0)
  if(showscores){
    backToMenuButton.show(); 
    usernameInputBox.hide();
    submitScoreButton.hide();
    fill(255)
    textSize(32)
    text("Highscores", width/2, 50)
    strokeWeight(2)
    stroke(255, 132, 0)
    line(50, 70, 750, 70);
    if(returnedHighscores !== null){
      textAlign(CENTER)
      textSize(24)
      let ytext = 110; 
      for(let s = 0; s < returnedHighscores.length; s++){
        text((s + 1) + ": " + returnedHighscores[s].username + " - " + returnedHighscores[s].score, width/2, ytext)
        ytext += 40
      }
      // s + 1 + ": " + returnedHighscores[s].username + " - " + returnedHighscores[s].score, width / 2, 100
      //text(1 + 1 + ": " + returnedHighscores[1].username + " - " + returnedHighscores[1].score, width/2, 160)
    }
  } else {
    noStroke(); 
    fill(100, 100, 100, 30)
    rect(0, 0, width, height)
    textAlign(CENTER)
    fill(120, 0, 0)
    textFont(font)
    textSize(42)
    text("You have Died", width / 2, 60)
    fill(255)
    textSize(16)
    text("Submit Name to be added to the leaderboard", width / 2, 90)
    usernameInputBox.show();
    submitScoreButton.show();
  }
}

function endscreenButtons(){
  usernameInputBox = createInput('').attribute("placeholder", "Username")
  usernameInputBox.parent('middlediv')
  usernameInputBox.id("usernameTextBox")
  usernameInputBox.position(100, height / 2)
  
  submitScoreButton = createButton("Submit Score")
  submitScoreButton.parent('middlediv')
  submitScoreButton.id("submitScoreButton")
  submitScoreButton.position(530, height /2) 
  submitScoreButton.mousePressed(dod)

  usernameInputBox.hide();
  submitScoreButton.hide();

  backToMenuButton = createButton("Main Menu")
  backToMenuButton.parent("middlediv")
  backToMenuButton.id("endscreenMenuButton")
  backToMenuButton.position(width/2 - 99, height - 70)
  backToMenuButton.mousePressed(backToMainMenu)
  backToMenuButton.hide();
}

function dod(){
  username = document.getElementById('usernameTextBox');
  if(username.value !== ''){
    console.log(username.value)
    submitPlayerScore(username);
    showscores = true;
    socket.emit("getHighScores");
  }
}

function backToMainMenu(){
  gameMode = 1
  backToMenuButton.hide();
}