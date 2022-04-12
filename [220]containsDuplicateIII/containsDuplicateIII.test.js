const {containsNearbyAlmostDuplicate} = require("./containsDuplicateIII");
describe('unit test', () => {
    test('normal test 1', () => {
        expect(containsNearbyAlmostDuplicate([1,2,3,1],3,0)).toEqual(true)
    })
    test('normal test 2', () => {
        expect(containsNearbyAlmostDuplicate([1,0,1,1],1,2)).toEqual(true)
    })
    test('normal test 3', () => {
        expect(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3)).toEqual(false)
    })
    test('normal test 4', () => {
        expect(containsNearbyAlmostDuplicate([2,3,4,3,2,1,2,11],3,8)).toEqual(true)
    })
    test('normal test 5', () => {
        expect(containsNearbyAlmostDuplicate([7,1,3],2,3)).toEqual(true)
    })

    test('windowSize 0 should always return false', () => {
        expect(containsNearbyAlmostDuplicate([7,1,3],0,3)).toEqual(false)
    })
})