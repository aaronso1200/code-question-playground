//Given an integer array nums and two integers k and t, return true if there
//are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <=
//t and abs(i - j) <= k.
//
//
// Example 1:
// Input: nums = [1,2,3,1], k = 3, t = 0
//Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1, t = 2
//Output: true
// Example 3:
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
//Output: false
//
//
// Constraints:
//
//
// 1 <= nums.length <= 2 * 10⁴
// -2³¹ <= nums[i] <= 2³¹ - 1
// 0 <= k <= 10⁴
// 0 <= t <= 2³¹ - 1
//
// Related Topics Array Sliding Window Sorting Bucket Sort Ordered Set 👍 2253 ?
//? 2204


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, windowSize, numberDifference) {
    if (windowSize === 0 ){
        return false
    }
    let startIndex = 0
    let endIndex = 1

    while (startIndex< nums.length) {
        for (let i = endIndex;i > startIndex;i--){
            if (Math.abs(nums[i] - nums[startIndex]) <= numberDifference) {
                return true
            }
        }
        if (endIndex - startIndex >= windowSize || endIndex === nums.length -1) {
            startIndex++
        }

        if (endIndex !== nums.length -1) {
            endIndex++
        }
    }

    return false
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {containsNearbyAlmostDuplicate}