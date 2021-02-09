const romanToInt = require("../../src/easy/Task13");

test("Convert roman numeral 'XVII' to integer", () => {
    expect(romanToInt("XVII")).toBe(17);
});

test("Convert roman numeral 'III' to integer", () => {
    expect(romanToInt("III")).toBe(3);
});

test("Convert roman numeral 'IV' to integer", () => {
    expect(romanToInt("IV")).toBe(4);
});

test("Convert roman numeral 'IX' to integer", () => {
    expect(romanToInt("IX")).toBe(9);
});

test("Convert roman numeral 'LVIII' to integer", () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test("Convert roman numeral 'MCMXCIV' to integer", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("Convert roman numeral 'DCXXI' to integer", () => {
    expect(romanToInt("DCXXI")).toBe(621);
});

test("Convert roman numeral 'MDCCCLXXXIV' to integer", () => {
    expect(romanToInt("MDCCCLXXXIV")).toBe(1884);
});

test("Convert roman numeral 'MDCXCV' to integer", () => {
    expect(romanToInt("MDCXCV")).toBe(1695);
});