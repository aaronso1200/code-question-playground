const {countSubIslands} = require('./countSubIsland')
describe('test', function () {
    test('ss',() => {
        let grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]];
        let grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
        expect(countSubIslands(grid1,grid2)).toEqual(2);
    })

});