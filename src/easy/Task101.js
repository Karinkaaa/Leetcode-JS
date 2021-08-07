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
 * Checks whether the 'root' is a mirror of itself (i.e., symmetric around its center)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
    const leftQueue = [root.left];
    const rightQueue = [root.right];

    while (leftQueue.length && rightQueue.length) {
        const tmpLeft = leftQueue.shift();
        const tmpRight = rightQueue.shift();

        if (!tmpLeft && !tmpRight) return true;
        else if (!tmpLeft || !tmpRight) return false;
        else if (tmpLeft.val !== tmpRight.val) return false;

        if (tmpLeft.left && tmpRight.right) {
            leftQueue.push(tmpLeft.left);
            rightQueue.push(tmpRight.right);
        } else if ((!tmpLeft.left && tmpRight.right) || (tmpLeft.left && !tmpRight.right))
            return false;

        if (tmpLeft.right && tmpRight.left) {
            leftQueue.push(tmpLeft.right);
            rightQueue.push(tmpRight.left);
        } else if ((!tmpLeft.right && tmpRight.left) || (tmpLeft.right && !tmpRight.left))
            return false;
    }

    return true;
};

module.exports = {
    isSymmetric,
    TreeNode
};