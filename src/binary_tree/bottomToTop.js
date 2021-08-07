/**
 * Definition for a binary tree node
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Given the root of a binary tree, returns the inorder traversal of its nodes' values
 *
 * @param {TreeNode} root
 * @return {[number]}
 */
const inorderTraversalFromBottomToTop = function (root) {
    if (root === null) return [];

    const queue = [root];
    const result = [];

    while (queue.length) {
        const tmp = queue.shift();
        result.push(tmp.val);

        if (tmp.left) queue.push(tmp.left);
        if (tmp.right) queue.push(tmp.right);
    }

    return result.reverse();
};

module.exports = {
    inorderTraversalFromBottomToTop,
    TreeNode
};