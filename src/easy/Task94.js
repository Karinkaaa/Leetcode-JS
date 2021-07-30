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
const inorderTraversal = function (root) {
    if (root === null) return [];

    const stack = [];
    const result = [];
    let currentRoot = root;

    while (stack.length || currentRoot) {
        if (currentRoot) {
            stack.push(currentRoot);
            currentRoot = currentRoot.left;
        } else {
            currentRoot = stack.pop();
            result.push(currentRoot.val);
            currentRoot = currentRoot.right;
        }
    }

    return result;
};

module.exports = {
    inorderTraversal,
    TreeNode
};