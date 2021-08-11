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
 * Returns the maximum depth of 'root'
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    const queue = [{ level: 1, root }];
    let prevLevel = 1;

    while (queue.length) {
        const tmp = queue.shift();
        prevLevel = tmp.level;

        if (tmp.root.left) queue.push({ level: tmp.level + 1, root: tmp.root.left });
        if (tmp.root.right) queue.push({ level: tmp.level + 1, root: tmp.root.right });
    }

    return prevLevel;
};

module.exports = {
    maxDepth,
    TreeNode
};