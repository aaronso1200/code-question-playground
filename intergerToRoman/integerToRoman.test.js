const intToRoman = require('./integerToRoman').intToRoman

describe('Integer to roman function',() => {
    test('3724 should return MMMDCCXXIV',() => {
        expect(intToRoman(3724)).toEqual('MMMDCCXXIV')
    })
    
    test('4545 should return MMMMDXLV',() => {
        expect(intToRoman(4545)).toEqual('MMMMDXLV')
    })

    test('4 should return IV', () =>{
        expect(intToRoman(4)).toEqual('IV')
    })

    test('1 should return I', () => {
        expect(intToRoman(1)).toEqual('I')
    })

    test('0 should return empty string',() => {
        expect(intToRoman(0)).toEqual('')
    })

})

