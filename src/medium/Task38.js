/**
 * Converts saying into a digit string
 *
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    if (n === 1) return "1";

    let str = "11";
    let strLength;
    let counter;
    let tmpStr;

    for (let j = 0; j < n - 2; j++) {
        strLength = str.length;
        counter = 1;
        tmpStr = "";

        for (let i = 0; i < strLength - 1; i++) {
            if (str[i] === str[i + 1]) {
                counter++;
            } else {
                tmpStr += counter + str[i];
                counter = 1;
            }

            if (i === strLength - 2) {
                tmpStr += counter + str[i + 1];
                str = tmpStr;
            }
        }
    }

    return str;
};

module.exports = countAndSay;