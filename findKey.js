/**Implement the function findKey which takes in an
 * INPUT:
 * function findKey
 * @param1 = object and a
 * @param2 = callback.
 * OUTPUT:
 * It should scan the object and return the first key for which the callback returns a truthy value.
 * If no key is found, then it should return undefined.
 */

// HELPER FUNCTION: Receive two parameters and compare
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION IMPLEMENTATION: Function findKey.
const findKey = function(object1, callback) {
  // Set the result to undefined as default
  // if no key is found, return result.
  let result = undefined;

  for (let objKey in object1) {
    // Passing the value of the object to callback, if truthy returns the key.
    if (callback(object1[objKey])) {
      // If callback is truthy, the function will exit as soon as it finds a match by returning the key which is the variable objKey.
      return objKey;
    }
  }

  return result;
};

// TEST CASE;
const test1 = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
const result1 = (findKey(test1, (x) => x.stars === 2)); // => Expected output: "noma"
assertEqual(result1, "noma"); // => ✅✅✅ Assertion Passed: noma === noma

const test2 = {
  Piper: { species: 'dog', age: 2 },
  Ginger: { species: 'cat', age: 3 },
  Sophie: { species: 'cat', age: 2 },
  Duke: { species: 'dog', age: 3 },
  Bunny: { species: 'rabbit', age: 1 },
  Loki: { species: 'hamster', age: 1 },
  Diesel: { species: 'rabbit', age: 2}
};
let result2 = (findKey(test2, (animal) => animal.species === 'rabbit' && animal.age === 1)); // => Expected output: "Bunny"
assertEqual(result2, "Bunny"); // => ✅✅✅ Assertion Passed: Bunny === Bunny
result2 = (findKey(test2, (animal) => animal.species === 'dog' && animal.age === 3)); // => Expected output: "Duke"
assertEqual(result2, "Duke"); // => ✅✅✅ Assertion Passed: Duke === Duke

