const ransomNote = require('./ransomNote')

describe('ransomNote function', () => {
    test('Single Character should return false',() => {
        expect(ransomNote.canConstruct("a","b")).toEqual(false)
    })
    test('Single Same Character should return true',() => {
        expect(ransomNote.canConstruct("a","a")).toEqual(true)
    })
    test('Duplicate Character should return true',() => {
        expect(ransomNote.canConstruct("aabb","aaaaaabbbabababababab")).toEqual(true)
    })
    test('Duplicate Character should return false',() => {
        expect(ransomNote.canConstruct("aabbaab","ab")).toEqual(false)
    })

})