const bracket = require('./validateParentheses.js')

describe('Valid Cases', () => {
    test('Parallel validateParentheses group should return true', () => {
        expect(bracket.isValid('()[]{}')).toEqual(true)
    })
    test('Small validateParentheses in big validateParentheses should return true', () => {
        expect(bracket.isValid('{[()]}')).toEqual(true)
    })
})

describe('Invalid Cases', () =>{
    test('Missing end validateParentheses should return false', () => {
        expect(bracket.isValid('()[')).toEqual(false)
    })
    test('Bracket inturupt should return false', () => {
        expect(bracket.isValid('([)]')).toEqual(false)
    })
    test('Only closing validateParentheses should return false', () => {
        expect(bracket.isValid(')')).toEqual(false)
    })
})
