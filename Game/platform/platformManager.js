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

  if(!player.jumping){
    jumps = 2
  }

  if(canCoinSpawn == 3){
    console.log()
    let lastPlatform = platforms.length - 1; 
    platforms[lastPlatform].platformCoins = generateCoinPattern(whatCoinPattern, platforms[lastPlatform].x + 180, platforms[lastPlatform].y - 200)
  }

  player.update(gameTime);
  player.show();
  

  for (var i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if(spawning == true){
      platforms[i].update(globalSpeed);
    }

    platforms[i].coinrender(player, score, globalSpeed); 

    if (platforms[i].off()) {
      platforms.splice(i, 1);
    }

    if(platforms[i].collideSide(player)){ 
      player.x = platforms[i].x - player.w
    }else if(platforms[i].collideTop(player)){ 
      player.y = 286
      player.velocity = 0;
      player.jumping = false;
    }
  }

  score.updateScore(frameCount);
  score.showScore(coinsCollected);
}

function bgimage(){
  image(bg1, bgx1, 0);
  image(bg1, bgx2, 0);
  image(bg2, bgfx1, 0);
  image(bg2, bgfx2, 0);
  
  bgx1 -= 1//(globalSpeed ** 0)
  bgx2 -= 1//(globalSpeed ** 0)
  bgfx1 -= 2//(globalSpeed ** 0) + 1
  bgfx2 -= 2//(globalSpeed ** 0) + 1
  
  if (bgx1 < -width){
    bgx1 = width;
  }
  if (bgx2 < -width){
    bgx2 = width;
  }
  if (bgfx1 < -width){
    bgfx1 = width;
  }
  if (bgfx2 < -width){
    bgfx2 = width;
  }
}