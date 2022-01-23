//Given two binary strings a and b, return their sum as a binary string.
//
//
// Example 1:
// Input: a = "11", b = "1"
//Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
//Output: "10101"
//
//
// Constraints:
//
//
// 1 <= a.length, b.length <= 10⁴
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
//
// Related Topics Math String Bit Manipulation Simulation 👍 4456 👎 501


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let mainArray;
    let subArray;
    let resultArray =[];

    if (a.length > b.length) {
        mainArray = a.split('').map(v=> Number(v)).reverse();
        subArray = b.split('').map(v=> Number(v)).reverse();
    } else {
        mainArray = b.split('').map(v=> Number(v)).reverse();
        subArray = a.split('').map(v=> Number(v)).reverse();
    }
    let remain =0;
    for (let i =0; i<mainArray.length; i++) {
        if (subArray[i] ===undefined) {
            subArray[i] =0;
        }
        let result = mainArray[i] + subArray[i] + remain;
        if (result >1) {
            remain =1;
            resultArray.push(result %2)
        } else {
            remain =0
            resultArray.push(result)
        }
    }

    if (remain>0) {
        resultArray.push(remain)
    }

    return resultArray.reverse().join('')
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {addBinary}