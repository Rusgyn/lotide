// HELPER FUNCTIONS: Function that takes in two arrays and returns true or false, based on a perfect match.
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

//HELPER FUNCTIONS. Compare two objects, return true if it matches else false.
const eqObjects = function(object1, object2) {
  let objectKey1 = Object.keys(object1); //returns an array with key elements
  let objectKey2 = Object.keys(object2); //returns an array with key elements

  //Check if two given object has the same number of properties (length).
  if (objectKey1.length !== objectKey2.length) {
    return false;
  }

  for (let key1 of objectKey1) {
    //check if value matches, when the value is an array.
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else { //check if value matches, when the value is "not" array.
      if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  
  return true;
};

//FUNCTION IMPLEMENTATION: will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
};