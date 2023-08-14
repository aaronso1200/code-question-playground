//Given an integer array nums, move all 0's to the end of it while maintaining
//the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
//
//
// Example 1:
// Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
//Output: [0]
//
//
// Constraints:
//
//
// 1 <= nums.length <= 10⁴
// -2³¹ <= nums[i] <= 2³¹ - 1
//
//
//
//Follow up: Could you minimize the total number of operations done? Related
//Topics Array Two Pointers 👍 8233 👎 224


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer1 = 0
    let pointer2 = 0
    while (pointer2 <= nums.length -1) {
        if (nums[pointer2] !== 0) {
            nums[pointer1] = nums[pointer2]
            pointer1++
        }
        pointer2++
    }

    while(pointer1 < pointer2) {
        nums[pointer1] = 0
        pointer1++
    }

};
//leetcode submit region end(Prohibit modification and deletion)

module.exports ={moveZeroes}