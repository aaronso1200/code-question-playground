//Given a collection of numbers, nums, that might contain duplicates, return
//all possible unique permutations in any order.
//
//
// Example 1:
//
//
//Input: nums = [1,1,2]
//Output:
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
//
//
// Example 2:
//
//
//Input: nums = [1,2,3]
//Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10
//
// Related Topics Array Backtracking 👍 4481 👎 90


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = []
    let stack = []
    let usedMap = {}

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
        let key = curObj.result.join(',')
        if (usedMap[key] === undefined) {
            usedMap[key] = true
            if (curObj.result.length === nums.length) {
                result.push(curObj.result)
            } else {
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
    }
    return result
};

//leetcode submit region end(Prohibit modification and deletion)

module.exports = {permuteUnique}