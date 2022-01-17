const searchInsertPosition = require('./searchInsertPosition')

describe('search insert position' ,() => {
    test('array with exact match should return index', () => {
        expect(searchInsertPosition.searchInsert([1,2,3,4,5,6],3)).toEqual(2);
        expect(searchInsertPosition.searchInsert([1,2,3,4,5,6],6)).toEqual(5);
    })

    test('target doesn\'t exist in array should return position it should be', () => {
        expect(searchInsertPosition.searchInsert([1,2,3,4,5],0)).toEqual(0);
        expect(searchInsertPosition.searchInsert([1,3,6,8,9],5)).toEqual(2);
        expect(searchInsertPosition.searchInsert([1,3,6,8,9],2)).toEqual(1);
        expect(searchInsertPosition.searchInsert([1,3,6,8,9],10)).toEqual(5);
    })

    test('empty array should return 0', () => {
        expect(searchInsertPosition.searchInsert([],2)).toEqual(0);
    })
})