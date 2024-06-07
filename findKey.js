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
const assertEqual = require('./assertEqual');

// Function findKey.
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

module.exports = findKey;