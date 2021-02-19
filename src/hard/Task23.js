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
    if (!node) return null;

    let array = [];

    while (node.next) {
        array.push(node.val);
        node = node.next;
    }
    array.push(node.val);

    return array;
};

/**
 * @param {[ListNode]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    const resultArray = [];
    let tmpArray;

    for (let i = 0; i < lists.length; i++) {
        tmpArray = getArrayFromNode(lists[i]);

        if (tmpArray) {
            for (let j = 0; j < tmpArray.length; j++) {
                resultArray.push(tmpArray[j]);
            }
        }
    }
    console.log(resultArray);

    return getNodeFromArray(resultArray.sort((a, b) => a - b));
};

module.exports = {
    mergeKLists,
    getNodeFromArray
};