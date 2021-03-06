const hasPathSum = require('./pathSum').hasPathSum
const TreeNode = require('./pathSum').TreeNode

describe('Has Path Sum Function',()=> {
    test('if has Path Sum should return true',()=> {
        let input = new TreeNode(4)
        input.left = new TreeNode(2)
        input.right = new TreeNode(7)
        input.left.left = new TreeNode(1)
        input.left.right = new TreeNode(3)
        input.right.right = new TreeNode(9)
        input.right.left = new TreeNode(6)
        expect(hasPathSum(input,7)).toEqual(true)
    })

    test('Has Path Sum should return false',()=>{
        let input = new TreeNode(4)
        input.left = new TreeNode(2)
        input.right = new TreeNode(7)
        input.left.left = new TreeNode(1)
        input.left.right = new TreeNode(3)
        input.right.right = new TreeNode(9)
        input.right.left = new TreeNode(6)
        expect(hasPathSum(input,999)).toEqual(false)
    })

    test('if root node right does not exist should return false',()=> {
        let input = new TreeNode(4)
        input.left = new TreeNode(2)
        expect(hasPathSum(input,4)).toEqual(false)
    })

    test('if only exist root node should return true',()=>{
        let input = new TreeNode(4)
        expect(hasPathSum(input,4)).toEqual(true)
    })
})