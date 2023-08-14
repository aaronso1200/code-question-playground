/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    mat = mat.map((array) => array.map(item => item===0?0:null))
    let currentDistance = 1
    let currentTarget = 0
    while (mat.flat().filter(item => item == null).length > 0) {
        let targetPositionList = findPositionOfCurrentTarget(mat,currentTarget)
        targetPositionList.forEach((targetPosition) => {
            if (mat[targetPosition[0]-1]&& mat[targetPosition[0]-1][targetPosition[1]] === null ) {  mat[targetPosition[0]-1][targetPosition[1]] = currentDistance }
            if (mat[targetPosition[0]+1]&& mat[targetPosition[0]+1][targetPosition[1]] === null) {  mat[targetPosition[0]+1][targetPosition[1]] = currentDistance }
            if (mat[targetPosition[0]][targetPosition[1]]&& mat[targetPosition[0]][targetPosition[1]-1] === null ) {  mat[targetPosition[0]][targetPosition[1]-1] = currentDistance }
            if (mat[targetPosition[0]][targetPosition[1]]&& mat[targetPosition[0]][targetPosition[1]+1] === null ) { mat[targetPosition[0]][targetPosition[1]+1] = currentDistance }
        })
        currentDistance += 1
        currentTarget +=1
    }
    return mat
};

function findPositionOfCurrentTarget(matrix,targetNumber) {
    let result = []
    for (let i = 0;i<matrix.length;i++){
        for (let j = 0; j < matrix[i].length;j++) {
            if (matrix[i][j] === targetNumber){
                result.push([i,j])
            }
        }
    }
    return result
}