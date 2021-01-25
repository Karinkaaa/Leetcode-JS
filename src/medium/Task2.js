/**
 * Definition for singly-linked list
 *
 * @param {number} val
 * @param {ListNode | null} next
 * @constructor
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

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
 * Converts array to node
 *
 * @param {[number]} array
 * @returns {ListNode}
 */
const getNodeFromArray = (array) => {
    if (array.length === 0) return new ListNode(0, null);
    if (array.length === 1) return new ListNode(array[0], null);

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
 * Adds two arrays and returns result array
 *
 * @param {[number]} array1
 * @param {[number]} array2
 * @returns {[number]}
 */
const addTwoArrays = (array1, array2) => {
    let result = [];
    let one = 0;
    let iterator1 = 0;
    let iterator2 = 0;
    let lastNumber = 0;

    let firstArray = array1;
    let secondArray = array2;

    if (array1.length < array2.length) {
        firstArray = array2;
        secondArray = array1;
    }

    let length1 = firstArray.length;
    let length2 = secondArray.length;

    while (iterator1 < length1) {
        if (iterator2 < length2) {
            let tempResult = firstArray[iterator1++] + secondArray[iterator2++] + one;
            lastNumber = tempResult;

            if (tempResult > 9) {
                tempResult %= 10;
                one = 1;
            } else {
                one = 0;
            }

            result.push(tempResult);
        } else {
            if (one === 0) {
                result.push(firstArray[iterator1++]);
            } else {
                let tempResult = firstArray[iterator1++] + one;
                lastNumber = tempResult;

                if (tempResult > 9) {
                    tempResult %= 10;
                    one = 1;
                } else {
                    one = 0;
                }

                result.push(tempResult);
            }
        }
    }

    if (lastNumber > 9) {
        result.push(1);
    }

    return result;
};

/**
 * Adds two numbers and returns the sum as a linked list
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const array1 = getArrayFromNode(l1);
    const array2 = getArrayFromNode(l2);
    const result = addTwoArrays(array1, array2);

    return getNodeFromArray(result);
};

module.exports = {
    addTwoNumbers,
    getNodeFromArray
};