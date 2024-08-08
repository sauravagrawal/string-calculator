const calculator = require("./calculator");

test("returns 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});
