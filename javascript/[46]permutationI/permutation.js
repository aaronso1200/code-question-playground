//Given an array nums of distinct integers, return all the possible
//permutations. You can return the answer in any order.
//
//
// Example 1:
// Input: nums = [1,2,3]
//Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
// Input: nums = [0,1]
//Output: [[0,1],[1,0]]
// Example 3:
// Input: nums = [1]
//Output: [[1]]
//
//
// Constraints:
//
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.
//
// Related Topics Array Backtracking 👍 9480 👎 176


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    let stack = []

    for (let i =0; i <nums.length; i++) {
        let remain = [...nums]
        remain.splice(i,1)
        let obj = {}
        obj.remain = remain
        obj.result = [nums[i]]
        stack.push(obj)
    }

    while (stack.length >0) {
        let curObj = stack.pop()
        if (curObj.result.length === nums.length) {
            result.push(curObj.result)
        }
        else {
            for (let i = 0; i < curObj.remain.length; i++) {
                let remain = [...curObj.remain]
                remain.splice(i, 1)
                let obj = {}
                obj.remain = remain
                obj.result = [...curObj.result, curObj.remain[i]]
                stack.push(obj)
            }
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {permute}