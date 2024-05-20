
//HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION:
//function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {
  
  let countedLetter = {};

  for (let char of string) {

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

//Test case will check the counts of all letters at once.
const sentence = countLetters('Lighthouse in the house 2024');

//Using Helper functions assertEqual
assertEqual(sentence['L'], 1);
assertEqual(sentence['i'], 2);
assertEqual(sentence['g'], 1);
assertEqual(sentence['h'], 4);
assertEqual(sentence['t'], 2);
assertEqual(sentence['o'], 2);
assertEqual(sentence['u'], 2);
assertEqual(sentence['s'], 2);
assertEqual(sentence['e'], 3);
assertEqual(sentence['i'], 2);
assertEqual(sentence['n'], 1);
assertEqual(sentence['2'], 2);
assertEqual(sentence['0'], 1);
assertEqual(sentence['4'], 1);
