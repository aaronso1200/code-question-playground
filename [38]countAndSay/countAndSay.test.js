const {countAndSay} = require('./countAndSay')

describe("count and say", () => {
    test('1 should return 11', () => {
        expect(countAndSay(1)).toEqual("1");
    })

    test('2 should return 12',() => {
        expect(countAndSay(2)).toEqual("11");
    })

    test('3 should return 1211',() => {
        expect(countAndSay(3)).toEqual("21");
    })

    test('4 should return 1211',() => {
        expect(countAndSay(4)).toEqual("1211");
    })
})