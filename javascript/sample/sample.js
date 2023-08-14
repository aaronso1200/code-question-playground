/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
        mat = mat.map((array) => array.map(item => item === 0 ? 0 : null))
        let currentDistance = 1
        let currentTarget = 0
        while (mat.flat().filter(item => item == null).length > 0) {
            for (let i = 0; i < mat.length; i++) {
                for (let j = 0; j < mat[i].length; j++) {
                    if (mat[i][j] === currentTarget) {
                        if (mat[i - 1] && mat[i - 1][j] === null) {
                            mat[i - 1][j] = currentDistance
                        }
                        if (mat[i + 1] && mat[i + 1][j] === null) {
                            mat[i + 1][j] = currentDistance
                        }
                        if (mat[i][j] && mat[i][j - 1] === null) {
                            mat[i][j - 1] = currentDistance
                        }
                        if (mat[i][j] && mat[i][j + 1] === null) {
                            mat[i][j + 1] = currentDistance
                        }
                    }
                }
            }
            console.log(mat)
            currentDistance += 1
            currentTarget += 1
        }
        return mat
    }
;