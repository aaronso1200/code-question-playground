/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    trackback(0, nums, result)
    return result;
};

var trackback = function (index, nums, result) {
    if (!result.find((a) => a.join('') === nums.join(''))) {
        result.push(nums)
    }
    if (index === nums.length - 1) {
        return
    }
    for (let i = index; i < nums.length; i++) {
        let swappedNums;
        swappedNums = [...nums];
        [swappedNums[index], swappedNums[i]] = [swappedNums[i], swappedNums[index]];
        trackback(index + 1, swappedNums, result);
    }
}
module.exports = {
    permute
}


