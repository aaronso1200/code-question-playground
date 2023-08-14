/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function(nums) {
    let map = {}
    for(let i=0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true
        } else {
            map[nums[i]] = true
        }
    }
    return false
};

module.exports = {
    containsDuplicate
}