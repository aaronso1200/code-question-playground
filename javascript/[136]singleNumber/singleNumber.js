//Given a non-empty array of integers nums, every element appears twice except
//for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only
//constant extra space.
//
//
// Example 1:
// Input: nums = [2,2,1]
//Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
//Output: 4
// Example 3:
// Input: nums = [1]
//Output: 1
//
//
// Constraints:
//
//
// 1 <= nums.length <= 3 * 10⁴
// -3 * 10⁴ <= nums[i] <= 3 * 10⁴
// Each element in the array appears twice except for one element which appears
//only once.
//
// Related Topics Array Bit Manipulation 👍 8517 👎 299


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans;
    let sortedNums = nums.sort((a, b) => a - b)
    console.log(sortedNums);
    for (let i = 1; i < sortedNums.length - 2; i++) {
        if (sortedNums[i] !== sortedNums[i - 1] && sortedNums[i] !== sortedNums[i + 1]) {
            ans = sortedNums[i];
        }
    }

    if (sortedNums[0] !== sortedNums[1]) {
        ans = sortedNums[0]
    }
    if (sortedNums[sortedNums.length - 1] !== sortedNums[sortedNums.length - 2]) {
        ans = sortedNums[sortedNums.length - 1]
    }

    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {singleNumber}