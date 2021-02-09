const romanToInt = require("../../src/easy/Task13");

test("Convert roman numeral 'III' to integer", () => {
    expect(romanToInt("III")).toBe(3);
});

test("Convert roman numeral 'IV' to integer", () => {
    expect(romanToInt("IV")).toBe(5);
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