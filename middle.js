// Function that will take in an array and return the middle-most element(s) of the given array.

const middle = function(arr) {

  let middleIndex = arr.length / 2;
  let middleElement = [];

  // Guard statement: returns empty array when the numbers of elements in an array are less or equal to two.
  if (arr.length <= 2) {
    return middleElement;
  }

  if (arr.length % 2 === 0) {
    middleElement = [arr[(middleIndex - 1)], arr[middleIndex]];
  } else {
    middleElement = [arr[Math.trunc(middleIndex)]];
  }

  return middleElement;
};

module.exports = middle;