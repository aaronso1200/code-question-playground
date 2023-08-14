const searchArray = require('./search2DArray.js')


describe('Search matrix', () => {
    test('matrix with negative value should return true', () => {
        expect(searchArray.searchMatrix([[-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]],0)).toEqual(true)
    })
    test('matrix with positive value should return true', () => {
        expect(searchArray.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)).toEqual(true)
    })
    test('matrix with no target value should return false', () => {
        expect(searchArray.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],6)).toEqual(false)
    })
    test('matrix with negative value should return true', () => {
        expect(searchArray.searchMatrix([[-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]],-6)).toEqual(true)
    })

})