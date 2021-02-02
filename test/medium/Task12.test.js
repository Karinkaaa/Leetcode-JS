const intToRoman = require("../../src/medium/Task12");

test("Convert number 3 to a roman numeral", () => {
    expect(intToRoman(3)).toBe("III");
});

test("Convert number 4 to a roman numeral", () => {
    expect(intToRoman(4)).toBe("IV");
});

test("Convert number 9 to a roman numeral", () => {
    expect(intToRoman(9)).toBe("IX");
});

test("Convert number 58 to a roman numeral", () => {
    expect(intToRoman(58)).toBe("LVIII");
});

test("Convert number 1994 to a roman numeral", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
});