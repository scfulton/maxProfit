// EX) $500 @ 10:30AM, : `stockprice[60] = 500`
// ``` stockprices = [ 10, 7, 5, 8, 1, 9]
// getMaxProfit(stockPrices) // 6, buy for $5 sell for $11

//data for bottom calls
//Data is formatted as { time : value }
// TIME is military/24hour and
// VALUE is in cents, so multiply by .01 or divide by 100 to get values in dollars.
// const testData = [
//   { 0930: 200 },
//   { 0931: 200 },
//   { 0932: 221 },
//   { 0933: 219 },
//   { 0934: 200 },
//   { 0935: 222 },
//   { 0936: 203 },
//   { 0937: 199 },
//   { 0938: 225 }
// ];

//data for sortArray calls
const testData = [
  { time: 0930, price: 200 },
  { time: 0931, price: 200 },
  { time: 0932, price: 221 },
  { time: 0933, price: 219 },
  { time: 0934, price: 200 },
  { time: 0935, price: 222 },
  { time: 0936, price: 203 },
  { time: 0937, price: 199 }
  // { time: 0938, price: 225 }
];

function sortArray(data) {
  let tempArr = [];
  let lowest;
  let newArr = data.sort((a, b) => (a.price > b.price ? 1 : -1));
  // console.log('newArr: ', newArr)
  //   let lowestPrice = newArr[0].price;
  //   let lowestTime = newArr[0].time;
  //   let canMakeMoney = false;
  //   tempArr.push(lowestTime);
  //   tempArr.push(lowestPrice);
  let canMakeMoney = true;
  //   let i = 0;
  let highestPrice, highestTime;
  // console.log(`lowestPrice: ${lowestPrice} : lowTime: ${lowestTime}`)
  try {
    for (let i = 0; i < newArr.length(); i++) {
      if (canMakeMoney) {
        let lowestPrice = newArr[i].price;
        let lowestTime = newArr[i].time;
        tempArr.push(lowestTime);
        tempArr.push(lowestPrice);

        newArr.forEach(element => {
          // console.log('element: ', element)
          if (element.price > lowestPrice && element.time > lowestTime) {
            highestPrice = element.price;
            highestTime = element.time;
            tempArr.push(highestTime);
            tempArr.push(highestPrice);
            canMakeMoney = true;
            // console.log(element);
          }
        });
      }
    }
    // console.log("tempArr: ", canMakeMoney);
    return tempArr;
  } catch (error) {
    return "Neg trend";
  }
}

function loadStockPrices(data) {
  //assuming datastream is clean as array of objs with minute and price per minute
  // we will add 0930 to all index to ge the time.

  let arrayForProcessing = [];
  data.forEach(element => {
    const temp = Object.values(element);
    arrayForProcessing.push(temp);
  });
  //   console.log("arrayForProcessing: ", arrayForProcessing);
  return arrayForProcessing;
}

function canProfitBeMade(array) {
  let answerArr = [];
  let tempLowest = 0;
  let tempHighest = 0;
  let indexT = 0;
  let indexL = 0;
  let indexH = 0;

  //prime the pump
  tempHighest = array[0];
  tempLowest = array[0];

  array.forEach(element => {
    let tempArr = element;

    if (tempArr > tempHighest) {
      indexH = indexT;
      tempHighest = tempArr;
    }

    if (tempArr < tempLowest) {
      if (indexT < indexL) {
        tempLowest = tempArr;
        indexL = indexT;
      }
    }

    indexT++;
    // console.log("indexL: " + indexL + " | indexH: " + indexH + " indexT: " + indexT);
  });

  answerArr.push({ indexL: indexL });
  answerArr.push({ LowVal: parseFloat(tempLowest) });
  answerArr.push({ indexH: indexH });
  answerArr.push({ HighVal: parseFloat(tempHighest) });

  return answerArr;
}

function convertDataToRelevant(data) {
  let tempArr = [];
  let OpenBell = 0930;
  let makeDollar = 0.01;
  let temp = [];

  data.forEach(element => {
    temp.push(parseFloat(Object.values(element)));
  });
  temp[0] += parseFloat(OpenBell);
  temp[1] *= parseFloat(makeDollar);
  temp[2] += parseFloat(OpenBell);
  temp[3] *= parseFloat(makeDollar);

  return temp;
}

function howMuchMoneyCanIMake(data) {
  console.log(`Buy at ${data[0]} for $${data[1].toFixed(2)}/share, 
    and sell at ${data[2]} at $${data[3].toFixed(2)}/share, 
    then I could have made $${(data[3] - data[1]).toFixed(2)}.`);
}

const answer = sortArray(testData);
console.log(answer);

// test calls
// const processed = loadStockPrices(testData);
// const pArr = canProfitBeMade(processed);
// const finalArr = convertDataToRelevant(pArr)
// howMuchMoneyCanIMake(finalArr);
// console.log("pArr: ", finalArr);

/**
 * 
 * Notes
 get file > load file > search file
 push         push      

 getMax 
    can profit?
    Design choice, first best profit.



    arr[5, 6, 5, 5, 8, 4, 7]


 




 */
