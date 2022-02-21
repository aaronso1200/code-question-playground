//You are given an m x n binary matrix grid. An island is a group of 1's (
//representing land) connected 4-directionally (horizontal or vertical.) You may assume
//all four edges of the grid are surrounded by water.
//
// The area of an island is the number of cells with a value 1 in the island.
//
// Return the maximum area of an island in grid. If there is no island, return 0
//.
//
//
// Example 1:
//
//
//Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,
//0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,
//0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]
//]
//Output: 6
//Explanation: The answer is not 11, because the island must be connected 4-
//directionally.
//
//
// Example 2:
//
//
//Input: grid = [[0,0,0,0,0,0,0,0]]
//Output: 0
//
//
//
// Constraints:
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.
//
// Related Topics Array Depth-First Search Breadth-First Search Union Find
//Matrix 👍 5327 👎 139


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let count = 0;
    for(let i =0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            count = Math.max(count,countArea(grid,i,j))
        }
    }
    return count
};

var countArea = function(grid,i,j) {
    if (grid[i]===undefined || grid[i][j] === undefined ||grid[i][j] ===0) {
        return 0
    }
    grid[i][j] =0
    return 1 + countArea(grid,i+1,j) + countArea(grid,i-1,j) + countArea(grid,i,j+1) + countArea(grid,i,j-1)
}
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {maxAreaOfIsland}