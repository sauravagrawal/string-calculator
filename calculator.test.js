const calculator = require("./calculator");

test("returns 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("returns the number for a single number string", () => {
  expect(calculator.add("1")).toBe(1);
});
