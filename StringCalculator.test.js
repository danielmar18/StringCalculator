const add = require ("./StringCalculator");

it("Should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});