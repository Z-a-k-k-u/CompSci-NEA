function platformManager(){
  if (platforms[platforms.length - 1].voidx <= width-platforms[platforms.length - 1].voidw) {
    randomcheck = floor(random(1,6))
    voidCheck = floor(random(1,4))
    platforms.push(new Platform(randomcheck, voidCheck, 98, 0, 255));
    console.log("Pushed New Platform")
    canSpawn = false
  }

  player.update();
  player.show();

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if(spawning == true){
      platforms[i].update();
    }

    if (platforms[i].off()) {
      platforms.splice(i, 1);
    }

    if(platforms[i].collideSide(player)){ 
      player.x = platforms[i].x - player.w
    }else if(platforms[i].collideTop(player)){ 
      player.y = 315
      player.velocity = 0;
      player.jumping = false
      maxJump = false; 
    }
  }

  score.updateScore(frameCount);
  score.showScore();
}