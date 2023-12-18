const assertEqual = function(actual, expected) {

  if (actual == expected){
    console.assert(true, actual + " === " + expected);
  } else {
    console.assert(false, actual + " !== " + expected);
  }

};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);