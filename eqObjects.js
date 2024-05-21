// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATIONS:
//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectKey1 = Object.keys(object1); //returns an array with key elements
  let objectKey2 = Object.keys(object2); //returns an array with key elements
  
  //Check if two given object has the same number of properties.
  if (objectKey1.length !== objectKey2.length) {
    return false;
  }

  for (let key1 of objectKey1) { //key1 = [color, size];
    if(object1[key1] === object2[key1]) {
          console.log("Line 31", object1[key1]);
          console.log("Line 32:", object2[key1]);
      return true;
    }
  }
  
  return true;
};

//TEST CASE
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);