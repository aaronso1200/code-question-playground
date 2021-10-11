const stock = require('./bestTimeBuyAndSellStock.js')


describe('Best Time Sell Stock', () => {
    test('should return 5', () => {
        expect(stock.maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
    })
    test('should return 0', () => {
        expect(stock.maxProfit([1,1,1,1,1,1,1])).toEqual(0)
    })
    test('should return 0', () => {
        expect(stock.maxProfit([])).toEqual(0)
    })
})