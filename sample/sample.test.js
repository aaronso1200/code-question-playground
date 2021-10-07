const sample = require('./sample.js')


describe('Test echo function', () => {
    it('Should return sample', () => {
        expect(sample.echo('sample'))
    })
})