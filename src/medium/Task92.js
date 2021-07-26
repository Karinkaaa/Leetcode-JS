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
 * Converts array to node
 *
 * @param {[number]} array
 * @returns {ListNode}
 */
const getNodeFromArray = (array) => {
    if (array.length === 0) return null;

    let listNode = new ListNode(array[0], null);
    let tmp = listNode;

    for (let i = 1; i < array.length; i++) {
        tmp.next = new ListNode(array[i], null);
        tmp.next.val = array[i];
        tmp = tmp.next;
    }

    return listNode;
};

/**
 *  Reverses the nodes of the list from position 'left' to position 'right', and returns the reversed list
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
    if (left === right) return head;

    let tmpHead = head;
    const arr = [];

    for (let i = 1; tmpHead !== null; i++) {
        if (i >= left && i <= right) {
            arr.push(tmpHead.val);
        }
        tmpHead = tmpHead.next;
    }
    tmpHead = head;

    for (let i = 1; i < left; i++)
        tmpHead = tmpHead.next;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (tmpHead === null) {
            tmpHead = new ListNode(arr[i], null);
        }
        tmpHead.val = arr[i];
        tmpHead = tmpHead.next;
    }

    return head;
};

module.exports = {
    reverseBetween,
    getNodeFromArray
};
