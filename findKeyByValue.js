
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
  // Iterating the objectKey elements using for...of.
  for (let key of objectKey) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};

// TEST CASE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // => drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // => undefined
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // => comedy

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => ✅✅✅ Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);// ✅✅✅ Assertion Passed: undefined === undefined=>
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");// => ✅✅✅ Assertion Passed: comedy === comedy