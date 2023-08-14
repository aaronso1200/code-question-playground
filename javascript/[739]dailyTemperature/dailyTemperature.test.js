const {dailyTemperatures} = require('./dailyTemperature')

describe('daily temperature',() => {
    test('no warmer temperature should return all 0',()=> {
        expect(dailyTemperatures([1,1,1,1])).toEqual([0,0,0,0])
        expect(dailyTemperatures([0,0,0,0])).toEqual([0,0,0,0])
        expect(dailyTemperatures([-1,-1,-1,-1])).toEqual([0,0,0,0])
    })

    test('every day warmer should return 1',()=> {
        expect(dailyTemperatures([1,2,3,4,5])).toEqual([1,1,1,1,0])
        expect(dailyTemperatures([-5,-4,-3,-2,-1])).toEqual([1,1,1,1,0])
        expect(dailyTemperatures([-3,-2,-1,-0,1])).toEqual([1,1,1,1,0])
    })

    test('random temperature should return correct result',()=> {
        expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0])
        expect(dailyTemperatures([30,40,50,60])).toEqual([1,1,1,0])
        expect(dailyTemperatures([5,4,3,2,1,99])).toEqual([5,4,3,2,1,0])
        expect(dailyTemperatures([1,99,97,100,1,33,55,44,33,22,11,99])).toEqual([1,2,1,0,1,1,5,4,3,2,1,0]);
    })
})
