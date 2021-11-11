function preSetup(){
  font = loadFont('assets/font/gamefont.TTF');
}

function allSetup(){
  canvas = createCanvas(800, 500);
  canvas.parent('middlediv')
  background(0);
  player = new Char(110, 100);
  platforms.push(new Platform(900, 3, 255, 0, 0));
  platforms[0].x = 50
  img = loadImage("assets/platform2.png")
  score = new Score(frameCount)
}
