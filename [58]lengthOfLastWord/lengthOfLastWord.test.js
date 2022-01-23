const {lengthOfLastWord} = require('./lengthOfLastWord')

describe('length of last word',() => {
    test('with space should return success',()=> {
        expect(lengthOfLastWord('to the moon    ')).toEqual(4)
    })
})
