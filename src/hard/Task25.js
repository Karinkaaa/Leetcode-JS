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
 * Gets all values from the node and returns these reversed values 'k' at a time
 *
 * @param {ListNode} head
 * @param {number} k
 * @returns {[number]}
 */
const getReversedKTimesValues = (head, k) => {
    const values = [];
    let tmpArray = [];

    while (head !== null) {
        if (tmpArray.length !== k) {
            tmpArray.push(head.val);
            head = head.next;
        } else {
            values.push(tmpArray.reverse());
            tmpArray = [];
        }
    }

    if (tmpArray.length > 0 && tmpArray.length < k) values.push(tmpArray);
    else values.push(tmpArray.reverse());

    return values;
};

/**
 * Concatenate two dimensional array to one dimensional array
 *
 * @param {number} array
 * @returns {[number]}
 */
const concatenateTwoDimensionalArray = (array) => {
    const result = [];
    let tmpArray = [];

    for (let i = 0; i < array.length; i++) {
        tmpArray = array[i];

        for (let j = 0; j < tmpArray.length; j++) {
            result.push(tmpArray[j]);
        }
    }

    return result;
};

/**
 * Reverses the nodes of a linked list 'k' at a time and returns its modified list
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
    if (k === 1) return head;

    let tmpHead = head;
    let counter = 0;

    const values = getReversedKTimesValues(tmpHead, k);
    const resultValues = concatenateTwoDimensionalArray(values);

    while (tmpHead !== null) {
        tmpHead.val = resultValues[counter++];
        tmpHead = tmpHead.next;
    }

    return head;
};

module.exports = {
    reverseKGroup,
    getNodeFromArray
};