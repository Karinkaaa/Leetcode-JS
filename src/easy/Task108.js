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
 * Converts 'nums' to a height-balanced binary search tree
 *
 * @param {[number]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (!nums.length) return null;

    let mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};

module.exports = {
    sortedArrayToBST,
    TreeNode
};