// Test Code for head()

const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5, 6, 7]), 5); // Test case output: Assertion Passed. Head is 5.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Test case output: Assertion Passed. Head is "Hello".
assertEqual(head([]), "Hello"); // Test case output: Assertion Failed. Array is undefined.
assertEqual(head([3]), 3); //Test case output: Assertion Passed. Head is 3.