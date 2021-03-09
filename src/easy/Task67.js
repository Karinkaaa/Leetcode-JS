/**
 * Returns the sum of two binary strings 'a' and 'b' as a binary string
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let result = "";

    if (a.length < b.length) a = alignBinaryLine(a, b);
    else if (a.length > b.length) b = alignBinaryLine(b, a);
    
    let length = a.length - 1;
    let remainder = 0;

    while (length >= 0) {
        if (remainder === 0) {
            if (a[length] === "0" && b[length] === "0") {
                result += 0;
            } else if (a[length] === "1" && b[length] === "1") {
                result += 0;
                remainder = 1;
            } else {
                result += 1;
            }
        } else {
            if (a[length] === "0" && b[length] === "0") {
                result += 1;
                remainder = 0;
            } else if (a[length] === "1" && b[length] === "1") {
                result += 1;
                remainder = 1;
            } else {
                result += 0;
                remainder = 1;
            }
        }

        length--;
    }

    if (remainder === 1) result += 1;
    return result.split("").reverse().join("");
};

const alignBinaryLine = (a, b) => {
    let result = a;

    for (let i = 0; i < b.length - a.length; i++) {
        result = "0" + result;
    }

    return result;
};

module.exports = addBinary;