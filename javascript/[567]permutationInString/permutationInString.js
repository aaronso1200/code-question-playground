//Given two strings s1 and s2, return true if s2 contains a permutation of s1,
//or false otherwise.
//
// In other words, return true if one of s1's permutations is the substring of
//s2.
//
//
// Example 1:
//
//
//Input: s1 = "ab", s2 = "eidbaooo"
//Output: true
//Explanation: s2 contains one permutation of s1 ("ba").
//
//
// Example 2:
//
//
//Input: s1 = "ab", s2 = "eidboaoo"
//Output: false
//
//
//
// Constraints:
//
//
// 1 <= s1.length, s2.length <= 10⁴
// s1 and s2 consist of lowercase English letters.
//
// Related Topics Hash Table Two Pointers String Sliding Window 👍 5231 👎 139


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let originalHashTable = constructHashTable(s1);
    let startPointer = 0
    for (let endPointer = s1.length - 1; endPointer < s2.length; endPointer++) {
        if (isInclusion(originalHashTable, s2.slice(startPointer, endPointer + 1))) {
            return true
        }
        startPointer++
    }
    return false;
};

var isInclusion = function (hashTable, string) {
    let tempHashTable = constructHashTable(string);
    let count = 0;
    Object.keys(hashTable).forEach((key) => {
        if (hashTable[key] === tempHashTable[key]){
            count++
        }
    })
    return count === Object.keys(hashTable).length;
}


var constructHashTable = function (s1) {
    let hashTable = {};
    for (let value of s1) {
        if (hashTable[value] === undefined) {
            hashTable[value] = 1
        } else {
            hashTable[value] = hashTable[value] + 1
        }
    }
    return hashTable;
}
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {checkInclusion}