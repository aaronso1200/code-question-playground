const {checkInclusion} = require('./permutationInString')

describe('check inclusion', function () {
    test('exactly match should return true', () => {
        expect(checkInclusion('ab','ab')).toEqual(true)
    })
    test('exist inclusion should return true',() => {
        expect(checkInclusion('ab','dfglkdjfkgldjflkoioba')).toEqual(true)
    })

    test('not exist inclusion should return false',() => {
        expect(checkInclusion('ab','dfgooidfokpokeporkwpoerkpm')).toEqual(false)
    })

});