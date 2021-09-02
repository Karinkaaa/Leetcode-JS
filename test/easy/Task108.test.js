const { sortedArrayToBST, TreeNode } = require("../../src/easy/Task108");

test("Convert [-10, -3, 0, 5, 9] to a height-balanced binary search tree", () => {
    const nums = [-10, -3, 0, 5, 9];
    const expected = new TreeNode(0, new TreeNode(-3, new TreeNode(-10)), new TreeNode(9, new TreeNode(5)));

    expect(sortedArrayToBST(nums)).toStrictEqual(expected);
});

test("Convert [1, 3] to a height-balanced binary search tree", () => {
    const nums = [1, 3];
    const expected = new TreeNode(3, new TreeNode(1));

    expect(sortedArrayToBST(nums)).toStrictEqual(expected);
});

test("Convert [1] to a height-balanced binary search tree", () => {
    const nums = [1];
    const expected = new TreeNode(1);

    expect(sortedArrayToBST(nums)).toStrictEqual(expected);
});

test("Convert [] to a height-balanced binary search tree", () => {
    const nums = [];
    const expected = null;

    expect(sortedArrayToBST(nums)).toStrictEqual(expected);
});

test("Convert [0, 1, 2, 3, 4, 5] to a height-balanced binary search tree", () => {
    const nums = [0, 1, 2, 3, 4, 5];
    const expected = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4)));

    expect(sortedArrayToBST(nums)).toStrictEqual(expected);
});