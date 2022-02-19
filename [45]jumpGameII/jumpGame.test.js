const {jump} = require('./jumpGame')

describe('jump game', function () {
    test('some test 19',() => {
        expect(jump([3,2,1])).toEqual(1)
    })
    test('some test 1',() => {
        expect(jump([2,3,1,1,4])).toEqual(2)
    })

    test('some test 2',() => {
        expect(jump([2,3,0,1,4])).toEqual(2)
    })
    test('some test 2',() => {
        expect(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5])).toEqual(5)
    })
    test('some test 3',() => {
        expect(jump([10,9,8,7,6,5,4,3,2,1,1,0])).toEqual(2)
    })

    test('0',() => {
        expect(jump([0])).toEqual(1)
    })

});