
// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION:
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  //obtain the key property of an object, returns an array.
  let objectKey = Object.keys(object);
  // Iterating the objectKey elements using standard for loop.
  for (let key = 0; key < objectKey.length; key++) {
    if (object[objectKey[key]] === value) {
      return objectKey[key];
    }
  }

  return undefined;

};
