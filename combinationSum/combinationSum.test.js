const combinationSum = require('./combinationSum').combinationSum

describe('Test combination Sum Function', () => {
    test('if no answer found should return empty array',()=> {
        expect(combinationSum([4,5,6,7],1)).toEqual([])

    })

    test('if repeat candidate can combine target should return result', () => {
        expect(combinationSum([1],3)).toEqual([[1,1,1]])
    })

    test('if distinct target can combine target should return result',() => {
        expect(combinationSum([1,2],3).sort()).toEqual([[1,1,1],[1,2]].sort())
    })
    test('if distinct target can combine target should return result',() => {
        expect(combinationSum([2,3,6,7],7).sort()).toEqual([[2,2,3],[7]].sort())
    })
})