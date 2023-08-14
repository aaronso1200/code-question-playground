const TreeNode = require('./inverseTree').TreeNode
const invertTree = require('./inverseTree').invertTree

describe('Invert Tree Function',()=> {
    test('Normal tree Should invert success',()=> {
        let input = new TreeNode(4)
        input.left = new TreeNode(2)
        input.right = new TreeNode(7)
        input.left.left = new TreeNode(1)
        input.left.right = new TreeNode(3)
        input.right.right = new TreeNode(9)
        input.right.left = new TreeNode(6)

        let result = new TreeNode(4)
        result.left = new TreeNode(7)
        result.right = new TreeNode(2)
        result.left.left = new TreeNode(9)
        result.left.right = new TreeNode(6)
        result.right.right = new TreeNode(1)
        result.right.left = new TreeNode(3)

        expect(invertTree(input)).toEqual(result)
    })
    test('Two layer tree should invert success',()=> {

    })
})