/**
 * Definition for singly-linked list
 *
 * @param {number} val
 * @param {ListNode} next
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Definition for a binary tree node
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Converts linked list to a height-balanced binary search tree
 *
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    return sortedArrayToBST(arr);
};

const sortedArrayToBST = (arr) => {
    if (!arr.length) return null;

    let mid = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[mid]);

    root.left = sortedArrayToBST(arr.slice(0, mid));
    root.right = sortedArrayToBST(arr.slice(mid + 1));

    return root;
};

module.exports = {
    sortedListToBST,
    ListNode,
    TreeNode
};