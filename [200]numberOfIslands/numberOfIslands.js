//Given an m x n 2D binary grid grid which represents a map of '1's (land) and
//'0's (water), return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands
//horizontally or vertically. You may assume all four edges of the grid are all
//surrounded by water.
//
//
// Example 1:
//
//
//Input: grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]
//Output: 1
//
//
// Example 2:
//
//
//Input: grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//Output: 3
//
//
//
// Constraints:
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.
//
// Related Topics Array Depth-First Search Breadth-First Search Union Find
//Matrix 👍 12289 👎 308


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++
                removeIsland(grid, i, j)
            }
        }
    }
    return count;
};

var removeIsland = function (grid, i, j) {
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === "0"){
        return
    }
    grid[i][j] = "0";
    removeIsland(grid,i+1,j);
    removeIsland(grid,i-1,j);
    removeIsland(grid,i,j+1);
    removeIsland(grid,i,j-1);
    return ;

}
//leetcode submit region end(Prohibit modification and deletion)

module.exports = {numIslands}