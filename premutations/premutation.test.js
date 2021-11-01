const premute = require('./premutation').permute

describe('Test premute function' , () => {
    test('3 number should return 6 possible solution',() => {
        expect(premute([1,2,3]).sort()).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].sort())
    })
    
    test('2 number should return 2 possible premutation',() => {
        expect(premute([0,1]).sort()).toEqual([[0,1],[1,0]].sort())
    })

    test('1 number should return 1 possible premutation', () => {
        expect(premute([1])).toEqual([[1]])
    })
    
})