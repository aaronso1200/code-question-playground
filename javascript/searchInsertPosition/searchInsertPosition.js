//Given a sorted array of distinct integers and a target value, return the
//index if the target is found. If not, return the index where it would be if it were
//inserted in order.
//
// You must write an algorithm with O(log n) runtime complexity.
//
//
// Example 1:
//
//
//Input: nums = [1,3,5,6], target = 5
//Output: 2
//
//
// Example 2:
//
//
//Input: nums = [1,3,5,6], target = 2
//Output: 1
//
//
// Example 3:
//
//
//Input: nums = [1,3,5,6], target = 7
//Output: 4
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
// nums contains distinct values sorted in ascending order.
// -10⁴ <= target <= 10⁴
//
// Related Topics Array Binary Search 👍 6354 👎 364


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length ==0 ) return 0;
    return searchInsertRecur(nums,target,0,nums.length -1)
};

var searchInsertRecur = function(nums,target,startIndex,endIndex) {
    if (startIndex > endIndex) {
        return startIndex;
    }

    let targetIndex = Math.floor((startIndex + endIndex)/2)
    if (nums[targetIndex] == target) {
        return targetIndex
    } else if (nums[targetIndex] < target) {
        return searchInsertRecur(nums,target,targetIndex+1,endIndex)
    } else {
        return searchInsertRecur(nums,target,startIndex,targetIndex -1)
    }

}
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {searchInsert}