// HELPER FUNCTION: Function that takes in two arrays and returns true or false, based on a perfect match.

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

// HELPER FUNCTION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    console.log("Both arguments must be array");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

//FUNCTION IMPLEMENTATION:
// Map function will take two arguments
// An array to map
// A callback function
// return new array based on the results of the callback function

// Define array to iterate.
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  // Iterate each elements in the given array using for...of
  for (let item of array) {
    // The output of our callback function will push to our variable results
    results.push(callback(item));
  }

  return results; // The results will return a new array based on the results of our callback function.
};

//TEST CASE

// Callback function is returning the first character of each word in the array.
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => ✅✅✅ Assertion Passed: g,c,t,m,t === g,c,t,m,t

const numWords = ["one", "two", "three", "four", "258", ".dot"];
// Callback function is returning the first character of each word in the array.
const results2 = map(numWords, (numWord) => numWord[0]);
assertArraysEqual(results2, [ 'o', 't', 't', 'f', '2', '.' ]); // => ✅✅✅ Assertion Passed: o,t,t,f,2,. === o,t,t,f,2,.

const numToStrings = [1, 333, 55555, 22, 4444];
// Callback function is returning the first character of each word in the array.
const results3 = map(numToStrings, (numToString) => numToString.toString()[0]);
assertArraysEqual(results3, [ '1', '3', '5', '2', '4' ]); // => ✅✅✅ Assertion Passed: 1,3,5,2,4 === 1,3,5,2,4

const evenNumbers = [1, 20, 3, 44, 55, 62, 101];
// Callback function is returning the even number itself, and string 'odd' for odd numbers.
const results4 = map(evenNumbers, (number) => {
  if (number % 2 === 0) {
    return number;
  } else {
    return "odd";
  }
});
assertArraysEqual(results4, ['odd', 20, 'odd', 44,'odd', 62, 'odd']); // => ✅✅✅ Assertion Passed: odd,20,odd,44,odd,62,odd === odd,20,odd,44,odd,62,odd