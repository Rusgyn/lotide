// Function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(string) {
  let countedLetter = {};

  for (let char of string) {
    // we can skip and not count spaces.
    if (char === ' ') {
      continue;
    }
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (countedLetter[char]) {
      countedLetter[char] += 1;
    } else {
      countedLetter[char] = 1;
    }
  }

  return countedLetter;
};

module.exports = countLetters;