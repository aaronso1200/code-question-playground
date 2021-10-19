const preorderTree = require('./preorderTree')
const TreeNode = require('./preorderTree').TreeNode

describe('preorderTraversal function', () => {
    test('Unbalance tree Should return correct result',() => {
        let input = new TreeNode(1)
        input.right = new TreeNode(2)
        input.right.left = new TreeNode(3)
        expect(preorderTree.preorderTraversal(input)).toEqual([1,2,3])
    })

    test('Balance tree Should return correct result',() => {
        let input = new TreeNode(1)
        input.left = new TreeNode(4)
        input.right = new TreeNode(2)
        input.right.left = new TreeNode(3)
        expect(preorderTree.preorderTraversal(input)).toEqual([1,4,2,3])
    })
})