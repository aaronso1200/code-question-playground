//Given an array of positive integers nums and a positive integer target,
//return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1,
//numsr] of which the sum is greater than or equal to target. If there is no such
//subarray, return 0 instead.
//
//
// Example 1:
//
//
//Input: target = 7, nums = [2,3,1,2,4,3]
//Output: 2
//Explanation: The subarray [4,3] has the minimal length under the problem
//constraint.
//
//
// Example 2:
//
//
//Input: target = 4, nums = [1,4,4]
//Output: 1
//
//
// Example 3:
//
//
//Input: target = 11, nums = [1,1,1,1,1,1,1,1]
//Output: 0
//
//
//
// Constraints:
//
//
// 1 <= target <= 10⁹
// 1 <= nums.length <= 10⁵
// 1 <= nums[i] <= 10⁵
//
//
//
//Follow up: If you have figured out the O(n) solution, try coding another
//solution of which the time complexity is O(n log(n)). Related Topics Array Binary
//Search Sliding Window Prefix Sum 👍 5864 👎 177


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let startIndex = 0
    let endIndex = 0
    let accumSum = nums[startIndex]
    let result = Infinity
    while (startIndex<=nums.length -1) {
        if (accumSum < target) {
            endIndex++
            accumSum = accumSum + nums[endIndex]
        } else if (accumSum >= target) {
            result = Math.min(result,endIndex - startIndex + 1)
            accumSum = accumSum - nums[startIndex]
            startIndex++
        } else if (endIndex >= nums.length -1){
            accumSum = accumSum - nums[startIndex]
            startIndex++
        }
    }
    return result == Infinity?0:result;
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {minSubArrayLen}