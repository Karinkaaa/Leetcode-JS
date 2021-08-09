const addStrings = require("../../src/easy/Task415");

test("Return the sum of '11' and '123' as a string", () => {
    const num1 = "11";
    const num2 = "123";
    const expected = "134";

    expect(addStrings(num1, num2)).toBe(expected);
});

test("Return the sum of '456' and '77' as a string", () => {
    const num1 = "456";
    const num2 = "77";
    const expected = "533";

    expect(addStrings(num1, num2)).toBe(expected);
});

test("Return the sum of '0' and '0' as a string", () => {
    const num1 = "0";
    const num2 = "0";
    const expected = "0";

    expect(addStrings(num1, num2)).toBe(expected);
});

test("Return the sum of '9333852702227987' and '85731737104263' as a string", () => {
    const num1 = "9333852702227987";
    const num2 = "85731737104263";
    const expected = "9419584439332250";

    expect(addStrings(num1, num2)).toBe(expected);
});