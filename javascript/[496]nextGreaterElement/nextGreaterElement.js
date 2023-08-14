//The next greater element of some element x in an array is the first greater
//element that is to the right of x in the same array.
//
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where
//nums1 is a subset of nums2.
//
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[
//j] and determine the next greater element of nums2[j] in nums2. If there is no
//next greater element, then the answer for this query is -1.
//
// Return an array ans of length nums1.length such that ans[i] is the next
//greater element as described above.
//
//
// Example 1:
//
//
//Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
//Output: [-1,3,-1]
//Explanation: The next greater element for each value of nums1 is as follows:
//- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so
//the answer is -1.
//- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
//- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so
//the answer is -1.
//
//
// Example 2:
//
//
//Input: nums1 = [2,4], nums2 = [1,2,3,4]
//Output: [3,-1]
//Explanation: The next greater element for each value of nums1 is as follows:
//- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
//- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so
//the answer is -1.
//
//
//
// Constraints:
//
//
// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 10⁴
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.
//
//
//
//Follow up: Could you find an O(nums1.length + nums2.length) solution? Related
//Topics Array Hash Table Stack Monotonic Stack 👍 1829 👎 127


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let hashTable = {};
    let stack = [nums2[0]]
    let lastElement = nums2[0];
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length > 0 && lastElement < nums2[i]) {
            hashTable[lastElement] = nums2[i];
            stack.pop();
            lastElement = stack[stack.length - 1] === undefined ? 0 : stack[stack.length - 1]
        }
        stack.push(nums2[i]);
        lastElement =nums2[i];
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = hashTable[nums1[i]] === undefined ? -1 : hashTable[nums1[i]]
    }

    return nums1;
};
//leetcode submit region end(Prohibit modification and deletion)
module.exports = {nextGreaterElement}