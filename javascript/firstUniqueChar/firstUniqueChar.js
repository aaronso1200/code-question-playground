/**
 * @param {string} s
 * @return {number}
 */

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// O(2N)

var firstUniqChar = function(s) {
    let orderedMap = new Map()
    s.split('').forEach((char,index) => {
        if (typeof orderedMap.get(char) ==='number') {
            orderedMap.set(char,'Duplicate')
        } else if (orderedMap.get(char) == null) {
            orderedMap.set(char,index)
        }
    })


    for (let [key, value] of orderedMap) {
        if (typeof value === 'number') {
            return value
        }
    }

    return -1
};

module.exports = {
    firstUniqChar
}