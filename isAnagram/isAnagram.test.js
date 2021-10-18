const anagram = require('./isAnagram')


describe('isAnagram function', function () {
    test('two same word should return true',() => {
        expect(anagram.isAnagram('abc','abc')).toEqual(true)
    })
    test('anagram word should return true',() => {
        expect(anagram.isAnagram('anagram','nagaram')).toEqual(true)
    })
    test('two total different word should return false',() => {
        expect(anagram.isAnagram('abc','def')).toEqual(false)
    })
    test('not anagram word should return false',() => {
        expect(anagram.isAnagram('ab','a')).toEqual(false)
    })

});