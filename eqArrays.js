// A function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(array1, array2) {

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

module.exports = eqArrays;