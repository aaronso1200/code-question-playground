const {permute} = require('./permutation')

describe('permuteUnique',() => {
    test('test',() => {
        expect(permute([1,2,3]).sort()).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].sort())
    })
})
