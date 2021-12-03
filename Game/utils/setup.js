let playerImg
let bg1;
let bg2;

let bgx1 = 0;
let bgx2;
let bgfx1 = 0; 
let bgfx2;

let coinSprites;
let coinJson;

let platformImage1
let platformImage2
let platformImage3
let platformImage4
let platformImage5
let platformImageSpecial

function preSetup(){
  font = loadFont('assets/font/gamefont.TTF');
  bg1 = loadImage('assets/backgrounds/Background.png')
  bg2 = loadImage('assets/backgrounds/Background_fore.png')
  coinSprites = loadImage('assets/CoinSprites.png')
  coinJson = loadJSON('assets/json/hehea.json')

  platformImage1 = loadImage('assets/platforms/PlatformW1.png')
  platformImage2 = loadImage('assets/platforms/PlatformW2.png')
  platformImage3 = loadImage('assets/platforms/PlatformW3.png')
  platformImage4 = loadImage('assets/platforms/PlatformW4.png')
  platformImage5 = loadImage('assets/platforms/PlatformW5.png')
  platformImageSpecial = loadImage('assets/platforms/PlatformSpecial.png')
}

function allSetup(){
  canvas = createCanvas(800, 500);
  canvas.parent('middlediv')
  background(0);
  player = new Char(110, 100);
  platforms.push(new Platform(900, 3, 255, 0, 0));
  platforms[0].x = 50
  score = new Score(frameCount)
  endscreenButtons(); 
  startMenuButtons()
  /* ------------------------- */
  gameTime = millis(); 
  console.log("Delta time loaded")
  /* ------------------------- */

  bgx2 = width;
  bgfx2 = width;

  playerImg = loadImage("assets/tplay.png")
}
