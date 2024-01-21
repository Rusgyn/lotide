/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/


//This function will check two arrays and return true if both match otherwise false.

const assertEqual = require("./assertEqual");

//This function takes in an object and a callback.
const findKey = function(object1, callback) {
  let results = undefined;

  //Taking the key from our argument in parameter object1.
  const object1Key = Object.keys(object1);

  for (const key of object1Key) {
    let value = object1[key];
    //If callback, the key of that parameter object1 will be assigned to results.
    if (callback(value)) {
      results = key;
      break;
    }
  }

  return results;
};

module.exports = findKey;


//Test cases
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");

console.log("--------");

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 6)); // => "undefined"
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 6)), undefined);