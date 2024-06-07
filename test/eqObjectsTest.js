// Test code for eqObjects().

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", function() {

  it("should return true if both objects properties matched", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("should return false if both objects properties do not matched", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "Long" };
    assert.deepEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });

  it("should return true if both objects properties matched. The value includes array", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.deepEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
  });

  it("should return false if both objects properties do not matched. The value includes array", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.deepEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
  });

});