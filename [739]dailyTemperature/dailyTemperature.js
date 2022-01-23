//Given an array of integers temperatures represents the daily temperatures,
//return an array answer such that answer[i] is the number of days you have to wait
//after the iᵗʰ day to get a warmer temperature. If there is no future day for
//which this is possible, keep answer[i] == 0 instead.
//
//
// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
//Output: [1,1,4,2,1,1,0,0]
// Example 2:
// Input: temperatures = [30,40,50,60]
//Output: [1,1,1,0]
// Example 3:
// Input: temperatures = [30,60,90]
//Output: [1,1,0]
//
//
// Constraints:
//
//
// 1 <= temperatures.length <= 10⁵
// 30 <= temperatures[i] <= 100
//
// Related Topics Array Stack Monotonic Stack 👍 6235 👎 151


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length ===0) {
        return []
    }

    if (temperatures.length ===1) {
        return [0] 
    let monitorStack = [{position:0,temperature:temperatures[0]}];
    let result = []
    for(let i=1;i<temperatures.length;i++) {
        let lastTemperature = monitorStack[monitorStack.length-1].temperature;
        while(lastTemperature<temperatures[i] && monitorStack.length>0) {
            let lastTemperatureInStack = monitorStack.pop();
            result[lastTemperatureInStack.position] = i - lastTemperatureInStack.position;
            lastTemperature = monitorStack[monitorStack.length-1] === undefined? 0:monitorStack[monitorStack.length-1].temperature;
        }
        monitorStack.push({position:i,temperature: temperatures[i]})
    }

    while(monitorStack.length>0) {
        let popResult = monitorStack.pop();
        result[popResult.position] = 0;
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
module.exports = {dailyTemperatures}