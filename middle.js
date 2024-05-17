// HELPER FUNCTION: The eqArrays function will take in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let [index, element] of arr1.entries()) {
    if (element !== arr2[index]) {
      return false;
    }
  }

  return true;
};

// HELPER FUNCTION: The assertArraysEqual function will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    console.log("Please provide an array argument/s");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

//FUNCTION IMPLEMENTATION: Function that will take in an array and return the middle-most element(s) of the given array.

const middle = function(arr) {

  let middle = arr.length / 2;
  let middleElement = [];

  // Guard statement: returns empty array when the numbers of elements in an array are less or equal to two.
  if (arr.length <= 2) {
    return middleElement;
  }

  if (arr.length % 2 === 0) {
    middleElement = [arr[(middle - 1)], arr[middle]];
  } else {
    middleElement = [arr[Math.trunc(middle)]];
  }

  return middleElement;
};

//TEST CODE:
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//TEST CASE:
const numbers = [20, 21, 30, 31, 40, 41];
console.log(middle(numbers)); // => [30, 31]
// TEST CASE using assertArraysEqual
assertArraysEqual(middle(numbers), [30, 31]);

const num = [15, 16, 17, 55, 53, 57, 8, 9, 10, 17, 101, 52, 12, 45, 25];
console.log(middle(num)); // => [9]
// TEST CASE using assertArraysEqual
assertArraysEqual(middle(num), [9]);

const words = ["apple", "banana", "carrot", "durian", "eggplant", "fig"];
console.log(middle(words)); // => [ 'carrot', 'durian' ]
// TEST CASE using assertArraysEqual
assertArraysEqual(middle(words), [ 'carrot', 'durian' ]);

const word = ["apple", "banana", "carrot", "durian", "eggplant"];
console.log(middle(word)); // => [ 'carrot']
// TEST CASE using assertArraysEqual
assertArraysEqual(middle(word), [ 'carrot']);