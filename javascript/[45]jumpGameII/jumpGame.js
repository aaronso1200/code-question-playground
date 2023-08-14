//Given an array of non-negative integers nums, you are initially positioned at
//the first index of the array.
//
// Each element in the array represents your maximum jump length at that
//position.
//
// Your goal is to reach the last index in the minimum number of jumps.
//
// You can assume that you can always reach the last index.
//
//
// Example 1:
//
//
//Input: nums = [2,3,1,1,4]
//Output: 2
//Explanation: The minimum number of jumps to reach the last index is 2. Jump 1
//step from index 0 to 1, then 3 steps to the last index.
//
//
// Example 2:
//
//
//Input: nums = [2,3,0,1,4]
//Output: 2
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 10⁴
// 0 <= nums[i] <= 1000
//
// Related Topics Array Dynamic Programming Greedy 👍 7239 👎 269


//leetcode submit region begin(Prohibit modification and deletion)
const {index} = require("elasticsearch/src/lib/apis/5_6");
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0
    return jumpRecur(nums,0,1)
};

var jumpRecur = function(nums,i,steps){
    if (i + nums[i] >= nums.length -1) return steps;
    let nextIndex = 0;
    let nextMaxStep = -Infinity;
    for (let j = 1; j <= nums[i]; j++) {
         if(nums[j+i] + j>= nextMaxStep){
             nextMaxStep = nums[j+i] + j;
             nextIndex = j+i;
         }
    }
    return jumpRecur(nums,nextIndex,steps+1);
}


//leetcode submit region end(Prohibit modification and deletion)

module.exports = {jump}