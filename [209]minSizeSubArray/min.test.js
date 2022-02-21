const {minSubArrayLen} = require('./min')

describe('min sub array', function () {
    test('',() => {
        expect(minSubArrayLen(7,[2,3,1,2,4,3])).toEqual(2);
    })
    test('number exactly match should return 1',() => {
        expect(minSubArrayLen(4,[1,4,4])).toEqual(1);
    })
    test('no match should return 0',() => {
        expect(minSubArrayLen(11,[1,1,1,1,1,1,1,1])).toEqual(0);
    })

    test('11 should return 0',() => {
        expect(minSubArrayLen(11,[1,2,3,4,5])).toEqual(3);
    })
    test('first num is answer 0',() => {
        expect(minSubArrayLen(6,[10,2,3])).toEqual(1);
    })
    test('first num is answer 0',() => {
        expect(minSubArrayLen(6,[1,1,1,7])).toEqual(1);
    })
});