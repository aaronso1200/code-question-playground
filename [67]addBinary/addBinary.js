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
    let length = Math.max(a.length,b.length);
    let mainArray = a.split('').map(v=> Number(v)).reverse();
    let subArray = b.split('').map(v=> Number(v)).reverse();
    let resultArray =[];

    fillArray(mainArray,length);
    fillArray(subArray,length);

    let remain =0;
    for (let i =0; i<mainArray.length; i++) {
        let result = mainArray[i] + subArray[i] + remain;
        resultArray.push(result%2);
        remain = result>1?1:0
    }

    if (remain>0) {
        resultArray.push(remain)
    }

    return resultArray.reverse().join('')
};

var fillArray = function(array,length) {
    for (let i=array.length;i<length;i++) {
        array.push(0)
    }
}
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {addBinary}