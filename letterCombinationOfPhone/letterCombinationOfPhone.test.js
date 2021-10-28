const letterCombinations = require('./letterCombinationOfPhone').letterCombinations


describe('letter combination function', () => {
    test('Empty digit should return empty array',() => {
        expect(letterCombinations('').sort()).toEqual([])
    })
    test('Digit 23 should return 9 combination records',() => {
        expect(letterCombinations('23').sort()).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"].sort())
    })
    
    test('Digit 1 return empty array',() => {
        expect(letterCombinations('1')).toEqual([])
    })

    test('Digit 2 should return 3 combination',()=> {
        expect(letterCombinations('2').sort()).toEqual(["a","b","c"].sort())
    })
})