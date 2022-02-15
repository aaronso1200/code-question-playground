const {numIslands} = require('./numberOfIslands')

describe('num of island', function () {
    test('1 small island should return 1',() => {
        let grid = [ ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"] ]
        expect(numIslands(grid)).toEqual(1)
    })

    test('3 island should return 3',() => {
        let grid = [ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ]
        expect(numIslands(grid)).toEqual(3)
    })

    test('1 big island should return 1',() => {
        let grid = [ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ]
        expect(numIslands(grid)).toEqual(3)
    })

});