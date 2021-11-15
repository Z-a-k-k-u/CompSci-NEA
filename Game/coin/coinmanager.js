function generateCoinPattern(number, platx, platy){
  let coinArray = []
  let coinx = undefined;
  let coiny = undefined;
  let currentCoinPattern = undefined; 
  let numberOfCoins = 0;

  function coinGenerator(ychange){
    coinx = platx + numberOfCoins
    coiny = platy + ychange
    coinArray.push(new Coin(coinx, coiny))
    numberOfCoins += 20
  }  

  switch(number){
    case 1:
      currentCoinPattern = CP1
      break;
    case 2:
      currentCoinPattern = CP2
      break;
    case 3:
      currentCoinPattern = CP3
      break;
    case 4:
      currentCoinPattern = CP4
      break;
    case 5:
      currentCoinPattern = CP5
      break;
  }

  for(c of currentCoinPattern){
    coinx = platx + numberOfCoins
    coiny = platy + 100 + 20 * (c - 1)
    coinArray.push(new Coin(coinx, coiny))
    numberOfCoins += 20
  }

  return coinArray; 
}
