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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
    if (!root) return [];
    if (!root.left && !root.right) return [[root.val]];

    const queue = [{ level: 1, root }];
    const result = [];
    let prevLevel = 1;
    let tmpArr = [];

    while (queue.length) {
        const tmp = queue.shift();

        if (tmp.level !== prevLevel && tmpArr.length) {
            if (prevLevel % 2 === 0) tmpArr.reverse();

            result.push(tmpArr);
            tmpArr = [];
        }

        tmpArr.push(tmp.root.val);
        prevLevel = tmp.level;

        if (tmp.root.left) queue.push({ level: tmp.level + 1, root: tmp.root.left });
        if (tmp.root.right) queue.push({ level: tmp.level + 1, root: tmp.root.right });
    }

    if (tmpArr.length) {
        if (prevLevel % 2 === 0) tmpArr.reverse();
        result.push(tmpArr);
    }

    return result;
};

module.exports = {
    zigzagLevelOrder,
    TreeNode
};