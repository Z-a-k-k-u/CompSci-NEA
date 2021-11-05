function generateCoinPattern(number, platx, platy){
  let coinArray = new Array([])
  let coinx = undefined;
  let coiny = undefined;
  let numberOfCoins = 0;
  function sameshiz(ychange){
    coinx = platx + numberOfCoins
    coiny = platy + ychange
    coinArray.push(new Coin(coinx, coiny))
    numberOfCoins += 20
  }  
  switch(number){
    case 1:
      for(c of CP1){
        switch(c){
          case 1:
            sameshiz(100); 
            break;
          case 2:
            sameshiz(120);
            break;
        }
      }
      break;
    case 2:
      for(e of CP2) {
        switch(e) {
          case 1:
          sameshiz(100);
          break; 
        }
      }
    break;
  }
}