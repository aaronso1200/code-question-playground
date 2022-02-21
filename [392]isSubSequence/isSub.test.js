const {isSubsequence} = require('./isSub')
describe('is sub sequence function', function () {
    test('test 1 should return true',() => {
        expect(isSubsequence('abc','ahbgdc')).toEqual(true)
    })
    test('test 2 should return false',() => {
        expect(isSubsequence('abc','sdggfhgfjdgsdfsdf')).toEqual(false)
    })

    test('very long string should return true',()=> {
       expect(isSubsequence('a',Array(1000000).fill('a').join(''))).toEqual(true)

    })
});