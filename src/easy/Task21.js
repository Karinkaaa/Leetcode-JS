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
 * Converts node to array
 *
 * @param {ListNode} node
 * @returns {[number]}
 */
const getArrayFromNode = (node) => {
    let array = [];

    while (node.next) {
        array.push(node.val);
        node = node.next;
    }
    array.push(node.val);

    return array;
};

/**
 * Merges two sorted linked lists and returns it as a sorted list
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    if (l1 === null && l2 === null) return null;
    else if (l1 === null) return l2;
    else if (l2 === null) return l1;

    const array1 = getArrayFromNode(l1);
    const array2 = getArrayFromNode(l2);
    const resultArray = array1.concat(array2).sort((a, b) => a - b);

    return getNodeFromArray(resultArray);
};

module.exports = {
    mergeTwoLists,
    getNodeFromArray
};