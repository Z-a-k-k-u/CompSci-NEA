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
    switch(whatCoinPattern) {
      case 1:
        platforms[lastPlatform].platformCoins = generateCoinPattern(1, platforms[lastPlatform].x, platforms[lastPlatform].y)
        break;
      case 2:
        platforms[lastPlatform].platformCoins = generateCoinPattern(2, platforms[lastPlatform].x, platforms[lastPlatform].y)
        break;
      case 3:
        platforms[lastPlatform].platformCoins = generateCoinPattern(3, platforms[lastPlatform].x, platforms[lastPlatform].y)
        break;
      case 4:
        platforms[lastPlatform].platformCoins = generateCoinPattern(4, platforms[lastPlatform].x, platforms[lastPlatform].y)
        break;
      case 5:
        platforms[lastPlatform].platformCoins = generateCoinPattern(5, platforms[lastPlatform].x, platforms[lastPlatform].y)
        break; 
    }
  }

  player.update();
  player.show();
  

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if(spawning == true){
      platforms[i].update();
    }

    platforms[i].coinrender(); 

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