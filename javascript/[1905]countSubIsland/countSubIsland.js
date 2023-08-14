//You are given two m x n binary matrices grid1 and grid2 containing only 0's (
//representing water) and 1's (representing land). An island is a group of 1's
//connected 4-directionally (horizontal or vertical). Any cells outside of the grid
//are considered water cells.
//
// An island in grid2 is considered a sub-island if there is an island in grid1
//that contains all the cells that make up this island in grid2.
//
// Return the number of islands in grid2 that are considered sub-islands.
//
//
// Example 1:
//
//
//Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]],
//grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
//Output: 3
//Explanation: In the picture above, the grid on the left is grid1 and the grid
//on the right is grid2.
//The 1s colored red in grid2 are those considered to be part of a sub-island.
//There are three sub-islands.
//
//
// Example 2:
//
//
//Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]],
//grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
//Output: 2
//Explanation: In the picture above, the grid on the left is grid1 and the grid
//on the right is grid2.
//The 1s colored red in grid2 are those considered to be part of a sub-island.
//There are two sub-islands.
//
//
//
// Constraints:
//
//
// m == grid1.length == grid2.length
// n == grid1[i].length == grid2[i].length
// 1 <= m, n <= 500
// grid1[i][j] and grid2[i][j] are either 0 or 1.
//
// Related Topics Array Depth-First Search Breadth-First Search Union Find
//Matrix 👍 643 👎 24


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let count = 0;
    console.log(grid2)
    for (let column =0 ; column<grid2.length;column++) {
        for (let row =0; row< grid2[column].length;row++) {
            if (grid2[column][row] !== 0 && getIsland(grid1,grid2,column,row)) {
                count++
            }
        }
    }
    return count;
};

var getIsland = function(grid1,grid2,column,row) {
    if (grid2[column] === undefined || grid2[column][row] === undefined || grid2[column][row] === 0){
        return true
    }
    grid2[column][row] = 0;
    let result1 = getIsland(grid1,grid2,column+1,row)
    let result2 = getIsland(grid1,grid2,column,row +1)
    let result3 = getIsland(grid1,grid2,column-1,row)
    let result4 = getIsland(grid1,grid2,column,row -1)
    let result = result1 && result2 && result3 && result4
    if (grid1[column][row] === 0) {
        result = false
    }

    return result
}


//leetcode submit region end(Prohibit modification and deletion)
module.exports = {countSubIslands}