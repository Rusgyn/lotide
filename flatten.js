// A function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {

  let flattenedArr = [];

  if (!Array.isArray(arr)) {
    console.log("Please provide an array argument");
    return;
  }

  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let el of element) {
        flattenedArr.push(el);
      }
    } else {
      flattenedArr.push(element);
    }
  }

  return flattenedArr;
};

module.exports = flatten;