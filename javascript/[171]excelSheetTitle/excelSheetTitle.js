//Given a string columnTitle that represents the column title as appear in an
//Excel sheet, return its corresponding column number.
//
// For example:
//
//
//A -> 1
//B -> 2
//C -> 3
//...
//Z -> 26
//AA -> 27
//AB -> 28
//...
//
//
//
// Example 1:
//
//
//Input: columnTitle = "A"
//Output: 1
//
//
// Example 2:
//
//
//Input: columnTitle = "AB"
//Output: 28
//
//
// Example 3:
//
//
//Input: columnTitle = "ZY"
//Output: 701
//
//
//
// Constraints:
//
//
// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].
//
// Related Topics Math String 👍 2326 👎 230


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    return columnTitle.split('').map(v => v.charCodeAt() - 64).reverse().reduce((prev,cur,index) => {
        return prev + cur * Math.pow(26,index)
    }, 0)
};
//leetcode submit region end(Prohibit modification and deletion)


module.exports = {
    titleToNumber
}