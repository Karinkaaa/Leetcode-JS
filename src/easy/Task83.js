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
 * Deletes all duplicates from 'head'
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    if (!head || head.next === null) return head;

    let tmpHead = head;

    while (tmpHead.next !== null) {
        if (tmpHead.val === tmpHead.next.val) tmpHead.next = tmpHead.next.next;
        else tmpHead = tmpHead.next;
    }

    return head;
};

module.exports = {
    deleteDuplicates,
    getNodeFromArray
};