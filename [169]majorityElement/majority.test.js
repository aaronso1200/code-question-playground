const {majorityElement} = require('./majority')

describe('majority', function () {
    test('',() => {
        expect(majorityElement([1,2,3,4,4,4,4,4])).toEqual("4")
    })
});