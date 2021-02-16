const letterCombinations = require("../../src/medium/Task17");

test("Given a string '23', return all possible letter combinations that the number could represent", () => {
    expect(letterCombinations("23")).toStrictEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});

test("Given a string '', return all possible letter combinations that the number could represent", () => {
    expect(letterCombinations("")).toStrictEqual([]);
});

test("Given a string '2', return all possible letter combinations that the number could represent", () => {
    expect(letterCombinations("2")).toStrictEqual(["a", "b", "c"]);
});

test("Given a string '234', return all possible letter combinations that the number could represent", () => {
    expect(letterCombinations("234"))
        .toStrictEqual(["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]);
});
