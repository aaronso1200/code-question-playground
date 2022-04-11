const thisJs = require('./somefunction')
const a= "a in test file"
const b= "b in test file"

describe('describe', () => {
    const a = "a in describe";
    const b= "b in describe";
    test('test', function() {
        let a = "a in test"
        let b = "b in test"
        thisJs.haveSomeThis();
        console.log('this a ' + this.a)
        expect(1).toBe(1)
    })

    // test('test', () => {
    //     let a = "a in test"
    //     let b = "b in test"
    //     let object = new thisJs.HaveThisClass();
    //     object.haveSomeThis.call(this);
    //     expect(1).toBe(1)
    // })
});

module.exports = {a:"A from module export"}