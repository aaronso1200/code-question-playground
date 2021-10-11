/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0
    }
    let lowestPrice = prices[0]
    let hightestPrice = prices[0]
    let profit = 0
    for (let i=0;i<prices.length;i++) {
        if(prices[i] < lowestPrice) {
            profit = Math.max(hightestPrice-lowestPrice,profit)
            lowestPrice = prices[i]
            hightestPrice = prices[i]
        }
        if(prices[i] > hightestPrice) {
            hightestPrice = prices[i]
        }
    }

    profit = Math.max(hightestPrice-lowestPrice,profit)
    return profit
};

module.exports = {
    maxProfit
}