const mathOperations = require("./index");

describe("Calculator Tests", () => {

  test("Addition", () => {
    expect(mathOperations.sum(5, 3)).toBe(8);
  });
  test("Subtraction", () => {
    expect(mathOperations.diff(6, 4)).toBe(2);
  });
  test("Multiplication", () => {
    expect(mathOperations.product(2, 3)).toBe(6);
  });

});