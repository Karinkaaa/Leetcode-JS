const { inorderTraversal, TreeNode } = require("../../src/easy/Task94");

test("Given the root of a binary tree [1, null, 2, 3], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
    const expected = [1, 3, 2];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [], return the inorder traversal of its nodes' values", () => {
    const root = null;
    const expected = [];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [1, 2, 3, 7, 5, 4, 6], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(7), new TreeNode(5)), new TreeNode(3, new TreeNode(4), new TreeNode(6)));
    const expected = [7, 2, 5, 1, 4, 3, 6];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [1, 4, 8, 3, null, 6, 9, null, 2, null, 7], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1, new TreeNode(4, new TreeNode(3, null, new TreeNode(2))), new TreeNode(8, new TreeNode(6, null, new TreeNode(7)), new TreeNode(9)));
    const expected = [3, 2, 4, 1, 6, 7, 8, 9];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [1], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1);
    const expected = [1];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [1, 2], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1, new TreeNode(2));
    const expected = [2, 1];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});

test("Given the root of a binary tree [1, null, 2], return the inorder traversal of its nodes' values", () => {
    const root = new TreeNode(1, null, new TreeNode(2));
    const expected = [1, 2];

    expect(inorderTraversal(root)).toStrictEqual(expected);
});
