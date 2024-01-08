/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

const eqArrays = function(array1, array2) {
  // console.log("the eq array1: ", array1);
  // console.log("the eq array2: ", array2)
  if (array1.length !== array2.length) {
    return false;
  }

  for (const [idx, el] of array1.entries()) {
    if (el !== array2[idx]) {
      return false;
    }
  }
  return true;
};

// This function checks if two arrays have the same elements in the same order.
//assertEqual can be used to check primitive return types (boolean, string..).
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //To determine the keys from given object
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  
  //To check if given objects have the same number of keys.
  //  if returns true, looping steps will be processed
  if (keyObj1.length !== keyObj2.length) {
    return false;
  }

  //Loop through the return keys of Object.keys method since the keys are in array
  for (let propObj1 of keyObj1) {
    //checking the values for each key is the same as the value for that same key in the other object
    if (object1[propObj1] === object2[propObj1]) {
      return true;
    }

    //checking if the values is an array.
    // if Array eqArrays() will be called.
    let object1HasArray = false;
    let object2HasArray = false;

    if (Array.isArray(object1[propObj1])) {
      object1HasArray = true;
    }
    if (Array.isArray(object2[propObj1])) {
      object2HasArray = true;
    }
    if (object1HasArray && object2HasArray) {
      eqArrays(object1[propObj1], object2[propObj1]);
    } else {
      return false;
    }
  }
  
  return true;
};

//Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "Long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
eqObjects(multiColorShirtObject , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {size: "medium", color: ["red", "blue"], sleeveLength: "Long"};
eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);