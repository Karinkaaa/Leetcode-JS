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
 * Rotates the list to the right by 'k' places
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if (!head || head.next === null) return head;

    let tmpHead = head;
    let length = 1;

    while (tmpHead.next !== null) {
        tmpHead = tmpHead.next;
        length++;
    }

    tmpHead.next = head;

    let i = 0;
    while (i++ !== length - (k % length)) {
        tmpHead = tmpHead.next;
    }

    head = tmpHead.next;
    tmpHead.next = null;

    return head;
};

module.exports = {
    rotateRight,
    getNodeFromArray
};