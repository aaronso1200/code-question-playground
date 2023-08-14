const duplicate = require('./containDuplicate.js')

describe('Contain duplicate function', () => {
    test('duplicate input set should return true',() => {
        expect(duplicate.containsDuplicate([1,2,3,1])).toEqual(true)
    })

    test('duplicate input set should return true',() => {
        expect(duplicate.containsDuplicate([1,2,3,1,1,2,2,3,3,13,1])).toEqual(true)
    })

    test('non duplicate input set should return true',() => {
        expect(duplicate.containsDuplicate([1,2,3])).toEqual(false)
    })
})