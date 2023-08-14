const {singleNumber} = require('./xorSolution')

describe('test', function () {
    test('should found',() => {
        expect(singleNumber([2,2,1])).toEqual(1);
        expect(singleNumber([1,1,3,2,2])).toEqual(3);
        expect(singleNumber([1,1,2,3,3,4,4,5,5,6,6,7,7,8,8])).toEqual(2);
        expect(singleNumber([-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,354] )).toEqual(354);
    })

});