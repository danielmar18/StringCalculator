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

it("Should not allow negative numbers", () => {
    expect(() => {
        add("6, -3")
    }).toThrow();
});

it("Should ignore numbers bigger than 1000", () => {
    expect(add("6,1001\n2")).toBe(8);
});

it("Should be able to handle new delimiters", () => {
    expect(add("//[[[\n21[[[11")).toBe(32);
});

it("Should be able to handle new delimiters and keep old ones", () => {
    expect(add("//***\n5***5\n5***5,5")).toBe(25);
});

it("Should be able to handle edge cases", () => {
    expect(add("//---\n5---5\n5---5,5")).toBe(25);
});

it("Should be able to handle edge cases", () => {
    expect(add("10001")).toBe(0);
});
