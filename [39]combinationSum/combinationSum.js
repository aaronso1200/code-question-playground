/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    getCombination(candidates, 0, target, result, [])
    return result
};

var getCombination = function (candidates, i, target, result, temp) {
    if (candidates[i] === undefined) {
        return
    }
    target = target - candidates[i];

    let copy = [...temp];
    copy.push(candidates[i])
    if (target === 0) {
        result.push(copy);
        return
    }

    for (let j = i; j<=candidates.length;j++){
        getCombination([...candidates,candidates[i]],i+1,target,result,copy)
    }
    return;
}


module.exports = {
    combinationSum
}