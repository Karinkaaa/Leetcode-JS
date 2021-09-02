const { isBalanced, TreeNode } = require("../../src/easy/Task110");

test("Determine if a binary tree [3, 9, 20, null, null, 15, 7] is height-balanced", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(isBalanced(root)).toBeTruthy();
});

test("Determine if a binary tree [1, 2, 2, 3, 3, null, null, 4, 4] is height-balanced", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));
    expect(isBalanced(root)).toBeFalsy();
});

test("Determine if a binary tree [] is height-balanced", () => {
    const root = null;
    expect(isBalanced(root)).toBeTruthy();
});

test("Determine if a binary tree [1, 2, null, null, 2, 3, null, null, 3, 4, null, null, 4] is height-balanced", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))), new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))));
    expect(isBalanced(root)).toBeFalsy();
});