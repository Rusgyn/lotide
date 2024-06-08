// Imported function that takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');

// Function which will take in two objects and returns true or false, based on a perfect match.

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

module.exports = eqObjects;
