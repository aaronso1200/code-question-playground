const plusOne = require('./plusOne')

describe('plusOne function', () => {
    test('without carry number should return result', () => {

        expect(plusOne.plusOne([1,2,3])).toEqual([1,2,4])
        expect(plusOne.plusOne([4,2,3])).toEqual([4,2,4])
        expect(plusOne.plusOne([1,1,1])).toEqual([1,1,2])
    })

    test('with carry number should return result', () => {
        expect(plusOne.plusOne([1,2,9])).toEqual([1,3,0])
        expect(plusOne.plusOne([1,9,9])).toEqual([2,0,0])
        expect(plusOne.plusOne([3,0,9])).toEqual([3,1,0])
    })

    test('empty array should return 1', () => {
        expect(plusOne.plusOne([])).toEqual([1]);
    })

    test('extreme large array should return result', () => {
        expect(plusOne.plusOne([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]);
    })
})
