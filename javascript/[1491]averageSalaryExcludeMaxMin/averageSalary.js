//You are given an array of unique integers salary where salary[i] is the
//salary of the iᵗʰ employee.
//
// Return the average salary of employees excluding the minimum and maximum
//salary. Answers within 10⁻⁵ of the actual answer will be accepted.
//
//
// Example 1:
//
//
//Input: salary = [4000,3000,1000,2000]
//Output: 2500.00000
//Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
//
//Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
//
//
// Example 2:
//
//
//Input: salary = [1000,2000,3000]
//Output: 2000.00000
//Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
//
//Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
//
//
//
// Constraints:
//
//
// 3 <= salary.length <= 100
// 1000 <= salary[i] <= 10⁶
// All the integers of salary are unique.
//
// Related Topics Array Sorting 👍 416 👎 75


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary = salary.sort((a,b)=> a-b)
    salary.pop();
    salary.shift();
    return salary.reduce((a,b)=> a+b,0)/salary.length
};
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {average}