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
 * Returns the bottom-up level order traversal of 'root' nodes' values (i.e., from left to right, level by level from leaf to root)
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
    if (!root) return [];
    if (!root.left && !root.right) return [[root.val]];

    const queue = [{ level: 1, root }];
    const result = [];
    let prevLevel = 1;
    let tmpArr = [];

    while (queue.length) {
        const tmp = queue.shift();

        if (tmp.level !== prevLevel && tmpArr.length) {
            result.push(tmpArr);
            tmpArr = [];
        }

        tmpArr.push(tmp.root.val);
        prevLevel = tmp.level;

        if (tmp.root.left) queue.push({ level: tmp.level + 1, root: tmp.root.left });
        if (tmp.root.right) queue.push({ level: tmp.level + 1, root: tmp.root.right });
    }

    if (tmpArr.length) result.push(tmpArr);
    
    return result.reverse();
};

module.exports = {
    levelOrderBottom,
    TreeNode
};