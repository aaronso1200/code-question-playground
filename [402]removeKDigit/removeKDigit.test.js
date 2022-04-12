const {removeKdigits} = require('./removeKDigit')

describe('remove k digits function', function () {
    test('12345 with k 1 should return 1234',() => {
        //1234 1345 1245 1235 2345 = 1234
        expect(removeKdigits("12345",1)).toEqual("1234");
    })
    test('1432219 with k 3 should return 1219',() => {
        expect(removeKdigits("1432219",3)).toEqual("1219");
    })

    test('10200 with k 1 should return 200',() => {
        expect(removeKdigits("10200",1)).toEqual("200");
    })
    test('10200 with k 2 should return 0',() => {
        expect(removeKdigits("10200",2)).toEqual("0");
    })
    test('112 with k 1 should return 11',() => {
        expect(removeKdigits("112",1)).toEqual("11");
    })
    test('100001 with k 1 should return 1',() => {
        expect(removeKdigits("100001",1)).toEqual("1");
    })
    test('487416 k 1 should return 1',() => {
        expect(removeKdigits("487416",4)).toEqual("16");
    })


});