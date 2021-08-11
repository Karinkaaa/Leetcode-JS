const { levelOrderBottom, TreeNode } = require("../../src/medium/Task107");

test("Return the bottom-up level order traversal of [3, 9, 20, 1, 8, 15, 7, 4, 11, 2] nodes' values", () => {
    const root = new TreeNode(3, new TreeNode(9, new TreeNode(1, null, new TreeNode(4)), new TreeNode(8)), new TreeNode(20, new TreeNode(15, new TreeNode(11), new TreeNode(2)), new TreeNode(7)));
    const expected = [[4, 11, 2], [1, 8, 15, 7], [9, 20], [3]];

    expect(levelOrderBottom(root)).toStrictEqual(expected);
});

test("Return the bottom-up level order traversal of [3, 9, 20, null, null, 15, 7] nodes' values", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    const expected = [[15, 7], [9, 20], [3]];

    expect(levelOrderBottom(root)).toStrictEqual(expected);
});

test("Return the bottom-up level order traversal of [1] nodes' values", () => {
    const root = new TreeNode(1);
    const expected = [[1]];

    expect(levelOrderBottom(root)).toStrictEqual(expected);
});

test("Return the bottom-up level order traversal of [] nodes' values", () => {
    const root = null;
    const expected = [];

    expect(levelOrderBottom(root)).toStrictEqual(expected);
});