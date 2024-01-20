// A function which will take in an array and return the middle-most element(s) of the given array.

const middle = function(whatIsMidArray) {
  
  let middleOfTheArray = [];
  let numOfArr = whatIsMidArray.length;

  if (numOfArr <= 2) {
    return middleOfTheArray;
  }

  if (numOfArr % 2 === 0) {
    let even = (numOfArr / 2) - 1;
    middleOfTheArray.push(whatIsMidArray[even], whatIsMidArray[even + 1]);
  } else {
    let odd = (numOfArr / 2) - 0.5;
    middleOfTheArray.push(whatIsMidArray[odd]);
  }

  return middleOfTheArray;

};

module.exports = middle;