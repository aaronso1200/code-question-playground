const phoneMapping = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': []
}


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length ===0) {
        return []
    }

    let digitArray = digits.split('')
    let result = []

    for (let i = 0; i < digitArray.length; i++) {
        if (result.length === 0) {
        phoneMapping[digitArray[i]].forEach((value) => {
           result.push(value)
            })
        } else {
            let temp = []
            while (result.length >0) {
            let currentWord = result.shift()
            phoneMapping[digitArray[i]].forEach((value) => {
                temp.push(`${currentWord}${value}`)
            })
            }
            result = temp
        }
    }

    return result
};

module.exports = {
    letterCombinations
}