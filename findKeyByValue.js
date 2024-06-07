/**
 * Function which takes in an object and a value.
 * It should scan the object return the first key which contains the given value.
 * if no key with that given value is found then it should return undefined.
 * */
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

module.exports = findKeyByValue;