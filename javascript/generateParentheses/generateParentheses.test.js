const bracket = require('./generateParentheses.js')


describe('Generate Parentheses', () => {
    test('Should return 1', () => {
        expect(bracket.generateParenthesis(1)).toEqual(["()"])
    })
    test('Small validateParentheses in big validateParentheses should return true', () => {
        expect(bracket.generateParenthesis(3).sort()).toEqual(["((()))","(()())","(())()","()(())","()()()"].sort())
    })
})