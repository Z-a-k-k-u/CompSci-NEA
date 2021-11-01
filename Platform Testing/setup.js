function allSetup(){
  createCanvas(800, 500);
  background(0);
  player = new Char(110, 100);
  platforms.push(new Platform(200, 255, 0, 0));
  img = loadImage("assets/platform2.png")
}

function preSetup(){
  font = loadFont('assets/font/gamefont.TTF');
}