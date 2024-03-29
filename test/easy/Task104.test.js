const { maxDepth, TreeNode } = require("../../src/medium/Task103");

test("Return the maximum depth of [3, 9, 20, 1, 8, 15, 7, 4, 11, 2]", () => {
    const root = new TreeNode(3, new TreeNode(9, new TreeNode(1, null, new TreeNode(4)), new TreeNode(8)), new TreeNode(20, new TreeNode(15, new TreeNode(11), new TreeNode(2)), new TreeNode(7)));
    expect(maxDepth(root)).toBe(4);
});

test("Return the maximum depth of [3, 9, 20, null, null, 15, 7]", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(maxDepth(root)).toBe(3);
});

test("Return the maximum depth of [1]", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
});

test("Return the maximum depth of []", () => {
    const root = null;
    expect(maxDepth(root)).toBe(0);
});