const {average} = require('./averageSalary');

describe('average', function () {
    test('test',() => {
        expect(average([1,2,6])).toEqual(2)
        expect(average([4000,3000,1000,2000])).toEqual(2500)
        expect(average([1000,2000,3000])).toEqual(2000)
        expect(average([15,9000].concat(Array(100000).fill(5000)))).toEqual(5000)
    })
});