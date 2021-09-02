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
 * Determines if a binary tree is height-balanced
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    if (root === null) return true;

    const leftDepth = nodeDepth(root.left);
    const rightDepth = nodeDepth(root.right);

    return Math.abs(leftDepth - rightDepth) < 2 && isBalanced(root.left) && isBalanced(root.right);
};

const nodeDepth = (root) => {
    if (root == null) return 0;

    const leftDepth = nodeDepth(root.left);
    const rightDepth = nodeDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};

module.exports = {
    isBalanced,
    TreeNode
};