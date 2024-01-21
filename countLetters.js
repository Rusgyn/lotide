//This function checks if two arrays are equal and prints a message to the console.

const assertEqual = require("./assertEqual");

//This function take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {
  let count = {};

  for (let char of string) {
    if (char !== ' ') { //handle cases where the input string has an empty space
      count[char] ||= 0; //initialize to zero if undefined
      count[char]++;
    }
  }
  console.log(count);
  return count;
};

module.exports = countLetters;

/*Below test cases were used during the process of completing the code.
*The test case is now through Mocha and Chai.
*/

//Test case will check the counts of all letters at once.
// const sentence = countLetters('Lighthouse in the house 2024'); /* => {
// {
//   L: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
//   '2': 2,
//   '0': 1,
//   '4': 1,
// }
// */

// assertEqual(sentence['L'], 1);
// assertEqual(sentence['i'], 2);
// assertEqual(sentence['g'], 1);
// assertEqual(sentence['h'], 4);
// assertEqual(sentence['t'], 2);
// assertEqual(sentence['o'], 2);
// assertEqual(sentence['u'], 2);
// assertEqual(sentence['s'], 2);
// assertEqual(sentence['e'], 3);
// assertEqual(sentence['i'], 2);
// assertEqual(sentence['n'], 1);
// assertEqual(sentence['2'], 2);
// assertEqual(sentence['0'], 1);
// assertEqual(sentence['4'], 1);

// // OTHER TEST CASE.

// // for (let [letter, count] of Object.entries(sentence('Lighthouse in the house 2024'))) {
// //   const expected = { 'L': 1, 'i': 2, 'g': 1, 'h': 4, 't': 2, 'o': 2, 'u': 2, 's': 2, 'e': 3, 'n': 1, '2': 2, '0': 1, '4': 1};

// //   assertEqual(expected[letter], count);
// // }