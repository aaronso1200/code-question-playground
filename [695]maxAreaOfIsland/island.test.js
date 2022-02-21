const {maxAreaOfIsland} = require('./island')

describe('max island', function () {
    test('test max island',() => {
        let input = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
        expect(maxAreaOfIsland(input)).toEqual(6)
    })
    test('zero island',() => {
        let input = [[0,0,0,0,0,0,0,0]]
        expect(maxAreaOfIsland(input)).toEqual(0)
    })

    test('1 island',() => {
        let input = [[1,1,1,1,1,1,1,1]]
        expect(maxAreaOfIsland(input)).toEqual(8)
    })
});