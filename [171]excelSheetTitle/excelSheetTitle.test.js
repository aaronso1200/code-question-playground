const {titleToNumber} = require('./excelSheetTitle')

describe('test', function () {
    test('test',() => {})
       expect(titleToNumber("A")).toEqual(1);
       expect(titleToNumber("Z")).toEqual(26);
       expect(titleToNumber("AB")).toEqual(28);
       expect(titleToNumber("AAA")).toEqual(703);
       expect(titleToNumber("ABC")).toEqual(731);
       expect(titleToNumber("AZ")).toEqual(52);
       expect(titleToNumber("BA")).toEqual(53);
       expect(titleToNumber("ZY")).toEqual(701);
       expect(titleToNumber("FXSHRXW")).toEqual(2147483647 );
});