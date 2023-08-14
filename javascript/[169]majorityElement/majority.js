//Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
//
//
// Example 1:
// Input: nums = [3,2,3]
//Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
//Output: 2
//
//
// Constraints:
//
//
// n == nums.length
// 1 <= n <= 5 * 10⁴
// -2³¹ <= nums[i] <= 2³¹ - 1
//
//
//
//Follow-up: Could you solve the problem in linear time and in O(1) space?
//Related Topics Array Hash Table Divide and Conquer Sorting Counting 👍 8268 👎 311


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}
    for (let i of nums) {
        if (count[i]) {
            count[i]++
        } else {
            count[i] = 1
        }
    }

    let largestCount = -Infinity;
    let result;
    for (let i of Object.keys(count)) {
        if(count[i] > largestCount) {
            largestCount = count[i]
            result = i
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {majorityElement}