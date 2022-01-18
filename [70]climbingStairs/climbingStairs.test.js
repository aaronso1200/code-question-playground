const {climbStairs} = require('./climbingStairs')

describe('climbing stairs', function () {
    test('no stair should return 0',() => {
        expect(climbStairs(0)).toEqual(0);
    })

    test('3 stairs should return 3 possible route',() => {
        expect(climbStairs(3)).toEqual(3);
    })

    test('5 stairs should return 3 possible route',() => {
        expect(climbStairs(3)).toEqual(3);
    })
});