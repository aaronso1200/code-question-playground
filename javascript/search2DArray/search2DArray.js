/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = function(matrix, target) {
    let result = searchForTarget(matrix,0,0,target)
    return result>0
};

function searchForTarget(matrix,x,y,target) {
    if (matrix[x] == null || matrix[x][y] == null || matrix[x][y] > target) {
        return 0
    }

    if (matrix[x][y] === target) {
        return 1
    }

    if ((matrix[x][matrix[x].length -1 ]) < target) {
        return searchForTarget(matrix,x+1,y,target)
    } else {
        return searchForTarget(matrix, x + 1, y, target) + searchForTarget(matrix, x, y + 1, target)
    }
}

module.exports = {
    searchMatrix
}