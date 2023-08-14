const {islandPerimeter} = require('./islandPerimeter')

describe('test', function () {
    test('something should return true',() => {
        expect(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])).toEqual(16)
    })
    test('something should return true',() => {
        expect(islandPerimeter([[1,0]])).toEqual(4)
    })
    
});