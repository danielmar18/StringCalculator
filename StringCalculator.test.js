const add = require ("./StringCalculator");

it("Should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("Should return number when only one number is in the string", () => {
    expect(add("6")).toBe(6);
});

it("Should return sum of two numbers given", () => {
    expect(add("1,4")).toBe(5);
});

it("Should summize multiple numbers", () => {
    expect(add("1,2,4,6")).toBe(13);
});

it("Should split on newline", () => {
    expect(add("6\n2")).toBe(8);
});