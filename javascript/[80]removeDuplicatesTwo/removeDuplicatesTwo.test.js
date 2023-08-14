const {removeDuplicates} = require('./removeDuplicatesTwo')


describe('remove duplicate', function () {
    test('no duplicate should return original result',()=> {
        let input = [1,2,3,4,5]
        expect(removeDuplicates(input)).toEqual(5);
        expect(input).toEqual([1,2,3,4,5]);
    })

    test('duplicate should return process result',()=> {
        let input = [1,1,1,1,1,1,1,1,1,1,2,3,4,5]
        let output = removeDuplicates(input)
        expect(output).toEqual(6);
        expect(input.slice(0,output)).toEqual([1,1,2,3,4,5]);
    })

    test('multiple duplicate should return process result',()=> {
        let input = [1,1,2,2]
        let output = removeDuplicates(input)
        expect(output).toEqual(4);
        expect(input.slice(0,output)).toEqual([1,1,2,2]);
    })

    test('multiple duplicate should return process result',()=> {
        let input = [1,2,2,2]
        let output = removeDuplicates(input)
        expect(output).toEqual(3);
        expect(input.slice(0,output)).toEqual([1,2,2]);
    })

    test('multiple duplicate should return process result',()=> {
        let input = [1,1,1,2,2,2,3,3]
        let output = removeDuplicates(input)
        expect(output).toEqual(6);
        expect(input.slice(0,output)).toEqual([1,1,2,2,3,3]);
    })

    test('multiple duplicate should return process result',()=> {
        let input = [1,1,1,1,1]
        let output = removeDuplicates(input)
        expect(output).toEqual(2);
        expect(input.slice(0,output)).toEqual([1,1]);
    })

    test('multiple duplicate should return process result',()=> {
        let input = [0,0,0,0,0]
        let output = removeDuplicates(input)
        expect(output).toEqual(2);
        expect(input.slice(0,output)).toEqual([0,0]);
    })
});