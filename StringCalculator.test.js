const add = require ("./StringCalculator");

it("Should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("Should return number when only one number is in the string", () => {
    expect(add("6")).toBe(6);
});