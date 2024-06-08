// A function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {

  let flatArr = [];

  if (!Array.isArray(arr)) {
    console.log("Please provide an array argument");
    return;
  }

  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let i of element) {
        flatArr.push(i);
      }
    } else {
      flatArr.push(element);
    }
  }

  return flatArr;
};

module.exports = flatten;