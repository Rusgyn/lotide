//test/headTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

//TEST CODE


assertEqual(head([5,2,3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello1");
