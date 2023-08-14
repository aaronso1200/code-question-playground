const {permuteUnique} = require('./permutationII')

describe('permuteUnique',() => {
    test('test',() => {
        expect(permuteUnique([1,2,3]).sort()).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].sort())
    })
})
