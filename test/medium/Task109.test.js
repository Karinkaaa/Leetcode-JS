const { sortedListToBST, ListNode, TreeNode } = require("../../src/medium/Task109");

test("Convert linked list [-10, -3, 0, 5, 9] to a height-balanced binary search tree", () => {
    const head = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));
    const expected = new TreeNode(0, new TreeNode(-3, new TreeNode(-10)), new TreeNode(9, new TreeNode(5)));

    expect(sortedListToBST(head)).toStrictEqual(expected);
});

test("Convert linked list [] to a height-balanced binary search tree", () => {
    const head = new ListNode();
    const expected = new TreeNode();

    expect(sortedListToBST(head)).toStrictEqual(expected);
});

test("Convert linked list [0] to a height-balanced binary search tree", () => {
    const head = new ListNode(0);
    const expected = new TreeNode(0);

    expect(sortedListToBST(head)).toStrictEqual(expected);
});

test("Convert linked list [1, 3] to a height-balanced binary search tree", () => {
    const head = new ListNode(1, new ListNode(3));
    const expected = new TreeNode(3, new TreeNode(1));

    expect(sortedListToBST(head)).toStrictEqual(expected);
});