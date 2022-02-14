const {coinChange} = require('./coinChange')

describe('coin change', function () {
    test('large combination ',() => {
        expect(coinChange([1,2,5],100)).toEqual(20);
    })

    test('zero amount expect zero ',() => {
        expect(coinChange([1,2,5],0)).toEqual(0);
    })

    test('only one solution',() => {
        expect(coinChange([1,2147483647],2)).toEqual(2);
    })
    test('normal case',() => {
        expect(coinChange([5,7],19)).toEqual(3);
    })
    test('normal case 2',() => {
        expect(coinChange([186,419,83,408],6249)).toEqual(20);
    })
    
});