const {moveZeroes} = require('./moveZero')

describe('move zero', function () {
    test('all zero should return all zero', () => {
        let input = [0, 0, 0, 0, 0]
        moveZeroes(input)
        expect(input).toEqual([0, 0, 0, 0, 0])
    })
    test('one number should move to front', () => {
        let input = [0, 0, 0, 0, 1];
        moveZeroes(input)
        expect(input).toEqual([1, 0, 0, 0, 0])
    })

    test('number should maintain order', () => {
        let input = [3, 6, 0, 0, 1];
        moveZeroes(input)
        expect(input).toEqual([3,6,1,0,0])
    })
});