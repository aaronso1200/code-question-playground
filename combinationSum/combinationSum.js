/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    const candidatesAsc = candidates.sort((a, b) => a - b)
    const queue = []

    for (let i = 0; i < candidatesAsc.length; i++) {

        if (candidatesAsc[i] < target) {
            queue.push({result: [candidatesAsc[i]], index: i, sum: candidatesAsc[i]})
        }

        if (candidatesAsc[i] === target) {
            result.push([candidatesAsc[i]])
        }
    }

    while (queue.length > 0) {
        let currentElement = queue.shift()
        for (let i = currentElement.index; i < candidatesAsc.length; i++) {
            if (currentElement.sum + candidatesAsc[i] === target) {
                result.push([...currentElement.result, candidatesAsc[i]])
            }

            if (currentElement.sum + candidatesAsc[i] < target) {
                queue.push({
                    result: [...currentElement.result, candidatesAsc[i]],
                    index: i,
                    sum: currentElement.sum + candidatesAsc[i]
                })
            }

        }
    }

    return result
};


module.exports = {
    combinationSum
}