//You are given an integer array coins representing coins of different
//denominations and an integer amount representing a total amount of money.
//
// Return the fewest number of coins that you need to make up that amount. If
//that amount of money cannot be made up by any combination of the coins, return -1.
//
//
// You may assume that you have an infinite number of each kind of coin.
//
//
// Example 1:
//
//
//Input: coins = [1,2,5], amount = 11
//Output: 3
//Explanation: 11 = 5 + 5 + 1
//
//
// Example 2:
//
//
//Input: coins = [2], amount = 3
//Output: -1
//
//
// Example 3:
//
//
//Input: coins = [1], amount = 0
//Output: 0
//
//
//
// Constraints:
//
//
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2³¹ - 1
// 0 <= amount <= 10⁴
//
// Related Topics Array Dynamic Programming Breadth-First Search 👍 9967 👎 242


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let mem = [0]
    coins.forEach((value) => {
        mem[value] = 1
    })

    let result = calCoinSum(coins, amount, mem)
    return result === Infinity ? -1 : result;
};


var calCoinSum = function (coins, amount, mem) {
    let resultArray = []

    if (mem[amount] !== undefined) {
        return mem[amount];
    }

    for (let i = 0; i < coins.length; i++) {
        let curAmount = amount;
        curAmount = curAmount - coins[i];
        if (curAmount > 0) {
            resultArray.push(calCoinSum(coins, curAmount, mem))
        }
    }

    let min = Math.min(...resultArray) +1
    mem[amount] = min;
    return min === 0 ? Infinity : min
}

//leetcode submit region end(Prohibit modification and deletion)

module.exports = {coinChange}