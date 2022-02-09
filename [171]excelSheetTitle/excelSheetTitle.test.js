const {titleToNumber} = require('./excelSheetTitle')

describe('test', function () {
    test('test',() => {})
       expect(titleToNumber("A")).toEqual(1);
       expect(titleToNumber("AB")).toEqual(28);
       expect(titleToNumber("ZY")).toEqual(701);
       expect(titleToNumber("FXSHRXW")).toEqual(2147483647 );
});