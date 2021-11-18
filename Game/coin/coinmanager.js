function generateCoinPattern(number, platx, platy){
  let coinArray = []
  let coinx = undefined;
  let coiny = undefined;
  let currentCoinPattern = undefined; 
  let numberOfCoins = 0;
  
  currentCoinPattern = CP[number] 

  for(c of currentCoinPattern){
    coinx = platx + numberOfCoins
    coiny = platy + 100 + 20 * (c - 1)
    coinArray.push(new Coin(coinx, coiny))
    numberOfCoins += 20
  }

  return coinArray; 
}
