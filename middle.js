// Implement middle which will take in an array and return the middle-most element(s) of the given array.

// This function checks if two arrays have the same elements in the same order.
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// This function uses eqArrays to check if two arrays are equal and prints a message to the console.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//This function will check what is the middle elements of the given array.
const middle = function(whatIsMidArray) {
  
  let middleOfTheArray = [];
  let numOfArr = whatIsMidArray.length;

  if (whatIsMidArray.length <= 2) {
    return middleOfTheArray;
  }

  if (numOfArr % 2 === 0) {
    let even = (numOfArr / 2) - 1;
    
    middleOfTheArray.push(whatIsMidArray[even]);
    middleOfTheArray.push(whatIsMidArray[even + 1]);
  }

  if (numOfArr % 2 !== 0) {
    let odd = (numOfArr / 2) - 0.5;

    middleOfTheArray.push(whatIsMidArray[odd]);
  }

  return middleOfTheArray;
};

//to test middle().
middle([1]); // => []
middle([1, 2]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle(["a", "b", "c", "d", "e", "f", "g"]); // => ["d"]
middle(["apple", "banana", "carrot", "durian"]); // => ["banana", "carrot"]

//to test using assertArraysEqual() if the return middle of the array element/s has passed or failed.
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]);
assertArraysEqual(middle(["apple", "banana", "carrot", "durian"]), ["banana", "carrot"]);