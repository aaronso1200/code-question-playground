const {containsNearbyDuplicate} = require('./containsDuplicate')

describe('test duplicate',()=> {
    test('normal case 1',()=> {
        expect(containsNearbyDuplicate([1,2,3,1],3)).toEqual(true)
    })
    test('normal case 2',()=> {
        expect(containsNearbyDuplicate([1,0,1,1],1)).toEqual(true)
    })
    test('normal case 3',()=> {
        expect(containsNearbyDuplicate([1,2,3,1,2,3],2)).toEqual(false)
    })
})