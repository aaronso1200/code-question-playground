//The count-and-say sequence is a sequence of digit strings defined by the
//recursive formula:
//
//
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(
//n-1), which is then converted into a different digit string.
//
//
// To determine how you "say" a digit string, split it into the minimal number
//of groups so that each group is a contiguous section all of the same character.
//Then for each group, say the number of characters, then say the character. To
//convert the saying into a digit string, replace the counts with a number and
//concatenate every saying.
//
// For example, the saying and conversion for digit string "3322251":
//
// Given a positive integer n, return the nᵗʰ term of the count-and-say
//sequence.
//
//
// Example 1:
//
//
//Input: n = 1
//Output: "1"
//Explanation: This is the base case.
//
//
// Example 2:
//
//
//Input: n = 4
//Output: "1211"
//Explanation:
//countAndSay(1) = "1"
//countAndSay(2) = say "1" = one 1 = "11"
//countAndSay(3) = say "11" = two 1's = "21"
//countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
//
//
//
// Constraints:
//
//
// 1 <= n <= 30
//
// Related Topics String 👍 1107 👎 3002


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return countAndSayWithValue(n-1,["1"]).join('')
};

var countAndSayWithValue = function(n,value) {
    if (n===0) {
        return value;
    } else {
        let resultValue = []
        let lastValue = value.toString()[0];
        let count = 0;
        for (let i of value) {
            if (i===lastValue) {
                count = count + 1
            } else {
                resultValue.push(count.toString());
                resultValue.push(lastValue);
                count = 1;
            }
            lastValue = i;
        }
        resultValue.push(count.toString());
        resultValue.push(lastValue);
        return countAndSayWithValue(n-1,resultValue)
    }
}

//leetcode submit region end(Prohibit modification and deletion)

module.exports= {countAndSay}