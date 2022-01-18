//You are climbing a staircase. It takes n steps to reach the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can
//you climb to the top?
//
//
// Example 1:
//
//
//Input: n = 2
//Output: 2
//Explanation: There are two ways to climb to the top.
//1. 1 step + 1 step
//2. 2 steps
//
//
// Example 2:
//
//
//Input: n = 3
//Output: 3
//Explanation: There are three ways to climb to the top.
//1. 1 step + 1 step + 1 step
//2. 1 step + 2 steps
//3. 2 steps + 1 step
//
//
//
// Constraints:
//
//
// 1 <= n <= 45
//
// Related Topics Math Dynamic Programming Memoization 👍 9870 👎 304


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [0,1,2]
    return climbStairsImp(n,arr)
};

var climbStairsImp = function(n,arr) {
    if (arr[n] === undefined) {
        arr[n] = climbStairsImp(n - 1, arr) + climbStairsImp(n - 2, arr)
    }
  return arr[n]
}
//leetcode submit region end(Prohibit modification and deletion)
module.exports= {climbStairs}