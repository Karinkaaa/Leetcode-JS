const { isSameTree, TreeNode } = require("../../src/easy/Task100");

test("Check if nodes [1, 2, 3] and [1, 2, 3] are the same or not", () => {
    const firstNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const secondNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    expect(isSameTree(firstNode, secondNode)).toBe(true);
});

test("Check if nodes [1, 2, 3] and [1, 2, 3, 4] are the same or not", () => {
    const firstNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const secondNode = new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(4)));

    expect(isSameTree(firstNode, secondNode)).toBe(false);
});

test("Check if nodes [1, 2] and [1, null, 2] are the same or not", () => {
    const firstNode = new TreeNode(1, new TreeNode(2));
    const secondNode = new TreeNode(1, null, new TreeNode(2));

    expect(isSameTree(firstNode, secondNode)).toBe(false);
});

test("Check if nodes [1, 2, 1] and [1, 1, 2] are the same or not", () => {
    const firstNode = new TreeNode(1, new TreeNode(2), new TreeNode(1));
    const secondNode = new TreeNode(1, new TreeNode(1), new TreeNode(2));

    expect(isSameTree(firstNode, secondNode)).toBe(false);
});

test("Check if nodes [] and [] are the same or not", () => {
    const firstNode = new TreeNode();
    const secondNode = new TreeNode();

    expect(isSameTree(firstNode, secondNode)).toBe(true);
});

test("Check if nodes [] and [0] are the same or not", () => {
    const firstNode = new TreeNode(null);
    const secondNode = new TreeNode(0);

    expect(isSameTree(firstNode, secondNode)).toBe(false);
});