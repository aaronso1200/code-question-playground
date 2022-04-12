//Given string num representing a non-negative integer num, and an integer k,
//return the smallest possible integer after removing k digits from num.
//
//
// Example 1:
//
//
//Input: num = "1432219", k = 3
//Output: "1219"
//Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219
//which is the smallest.
//
//
// Example 2:
//
//
//Input: num = "10200", k = 1
//Output: "200"
//Explanation: Remove the leading 1 and the number is 200. Note that the output
//must not contain leading zeroes.
//
//
// Example 3:
//
//
//Input: num = "10", k = 2
//Output: "0"
//Explanation: Remove all the digits from the number and it is left with
//nothing which is 0.
//
//
//
// Constraints:
//
//
// 1 <= k <= num.length <= 10⁵
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.
//
// Related Topics String Stack Greedy Monotonic Stack 👍 4578 👎 195


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let result = []
    let numArray = num.toString().split('').map(v => Number(v))
    if (k >= numArray.length) {
        return "0"
    }

    result.push(numArray[0])
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] == 0 && result.length <= k && k > 0) {
            k = k - result.length
            result = []
        }
        while (result.length > 0 && k > 0 && numArray[i] < result[result.length - 1]) {
            result.pop()
            k--
        }
        if (result.length !== 0 || numArray[i] !== 0) {
            result.push(numArray[i])
        }
    }

    while (k > 0) {
        result.pop()
        k--
    }
    if (result.length == 0) {
        return "0"
    }
    return result.join('').toString();

};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {removeKdigits}