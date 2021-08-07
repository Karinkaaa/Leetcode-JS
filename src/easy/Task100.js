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
 * Checks if nodes are the same or not
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    const queueP = [p];
    const queueQ = [q];

    while (queueP.length && queueQ.length) {
        const tmpP = queueP.shift();
        const tmpQ = queueQ.shift();

        if (tmpP.val !== tmpQ.val) return false;

        if (tmpP.left && tmpQ.left) {
            queueP.push(tmpP.left);
            queueQ.push(tmpQ.left);
        } else if ((!tmpP.left && tmpQ.left) || (tmpP.left && !tmpQ.left))
            return false;

        if (tmpP.right && tmpQ.right) {
            queueP.push(tmpP.right);
            queueQ.push(tmpQ.right);
        } else if ((!tmpP.right && tmpQ.right) || (tmpP.right && !tmpQ.right))
            return false;
    }

    return true;
};

module.exports = {
    isSameTree,
    TreeNode
};
