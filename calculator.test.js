const calculator = require("./calculator");

test("returns 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("returns the number for a single number string", () => {
  expect(calculator.add("1")).toBe(1);
});

test("returns the sum of two numbers separated by a comma", () => {
  expect(calculator.add("1,5")).toBe(6);
});

test("returns the sum of multiple numbers separated by commas", () => {
  expect(calculator.add("1,2,3,4")).toBe(10);
});

test("returns the sum of numbers separated by commas or new lines", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});

test("returns the sum of numbers with a custom delimiter", () => {
  expect(calculator.add("//;\n1;2")).toBe(3);
});
