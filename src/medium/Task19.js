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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let tmpHead = new ListNode(0, head);
    let firstNode = head;
    let length = 0;

    while (firstNode !== null) {
        firstNode = firstNode.next;
        length++;
    }

    length -= n;
    firstNode = tmpHead;

    while (length-- > 0) firstNode = firstNode.next;
    firstNode.next = firstNode.next.next;

    return tmpHead.next;
};

module.exports = {
    removeNthFromEnd,
    getNodeFromArray
};