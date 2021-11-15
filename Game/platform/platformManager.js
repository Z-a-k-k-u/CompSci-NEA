function platformManager(){
  if (platforms[platforms.length - 1].voidx <= width-platforms[platforms.length - 1].voidw) {
    randomcheck = floor(random(1,6))
    voidCheck = floor(random(1,4))
    canCoinSpawn = floor(random(1,4))
    whatCoinPattern = floor(random(1,6))
    platforms.push(new Platform(randomcheck, voidCheck, 98, 0, 255));
    console.log("Pushed New Platform")
    canSpawn = false
  }

  if(canCoinSpawn == 3){
    let lastPlatform = platforms.length - 1; 
    platforms[lastPlatform].platformCoins = generateCoinPattern(whatCoinPattern, platforms[lastPlatform].x + 180, platforms[lastPlatform].y - 200)
  }

  player.update();
  player.show();
  

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if(spawning == true){
      platforms[i].update();
    }

    platforms[i].coinrender(player); 

    if (platforms[i].off()) {
      platforms.splice(i, 1);
    }

    if(platforms[i].collideSide(player)){ 
      player.x = platforms[i].x - player.w
    }else if(platforms[i].collideTop(player)){ 
      player.y = 315
      player.velocity = 0;
      player.jumping = false
    }
  }

  score.updateScore(frameCount);
  score.showScore();
}