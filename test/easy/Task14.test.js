const longestCommonPrefix = require("../../src/easy/Task14");

test("Find the longest common prefix string amongst ['flower', 'flow', 'flight']", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("Find the longest common prefix string amongst ['dog', 'racecar', 'car']", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("Find the longest common prefix string amongst []", () => {
    expect(longestCommonPrefix([])).toBe("");
});

test("Find the longest common prefix string amongst ['']", () => {
    expect(longestCommonPrefix([""])).toBe("");
});
