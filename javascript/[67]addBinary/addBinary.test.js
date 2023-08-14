const {addBinary} = require('./addBinary')

describe('add Binary',() => {
    test('normal add binary should return result', ()=> {
        expect(addBinary('11','1')).toEqual('100')
        expect(addBinary('1010','1011')).toEqual('10101')
    })
})
