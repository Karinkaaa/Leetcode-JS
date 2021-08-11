const { zigzagLevelOrder, TreeNode } = require("../../src/medium/Task103");

test("Return zigzag the level order traversal of [3, 9, 20, 1, 8, 15, 7, 4, 11, 2] nodes' values", () => {
    const root = new TreeNode(3, new TreeNode(9, new TreeNode(1, null, new TreeNode(4)), new TreeNode(8)), new TreeNode(20, new TreeNode(15, new TreeNode(11), new TreeNode(2)), new TreeNode(7)));
    const expected = [[3], [20, 9], [1, 8, 15, 7], [2, 11, 4]];

    expect(zigzagLevelOrder(root)).toStrictEqual(expected);
});

test("Return zigzag the level order traversal of [3, 9, 20, null, null, 15, 7] nodes' values", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    const expected = [[3], [20, 9], [15, 7]];

    expect(zigzagLevelOrder(root)).toStrictEqual(expected);
});

test("Return zigzag the level order traversal of [1] nodes' values", () => {
    const root = new TreeNode(1);
    const expected = [[1]];

    expect(zigzagLevelOrder(root)).toStrictEqual(expected);
});

test("Return zigzag the level order traversal of [] nodes' values", () => {
    const root = null;
    const expected = [];

    expect(zigzagLevelOrder(root)).toStrictEqual(expected);
});