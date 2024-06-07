// Test Code for countOnly()

const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", function() {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Salima"
  ];
  
  it("should return 1 for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'Salima'] ", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1["Jason"], 1);
  });

  it("should return undefined for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'Salima'] ", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1["Karima"], undefined);
  });

  it("should return 2 for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'Salima'] ", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1["Fang"], 2);
  });

  it("should return 3 for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'Salima'] ", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Salima": true });
    assert.deepEqual(result1["Salima"], 3);
  });

  it("should return undefined for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'Salima'] ", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1["Agouhanna"], undefined);
  });

});
