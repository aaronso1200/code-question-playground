const {mergeTrees} = require('./mergeBinaryTree')

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe('', ()=> {
    test('',()=> {
        let node = new TreeNode(1)
        node.left = new TreeNode(1)
        node.right =  new TreeNode(1)
        node.right.right =  new TreeNode(1)
        node.right.left = new  TreeNode(1)
        node.right.right.right =  new TreeNode(1)

        let node2 = new TreeNode(2)
        node2.left = new TreeNode(2)
        node2.right = new TreeNode(2)
        node2.left.left = new TreeNode(2)

        let resultNode = new TreeNode(3)
        resultNode.left = new TreeNode(3)
        resultNode.right = new TreeNode(3)
        resultNode.left.left = new TreeNode(2)
        resultNode.right.right =  new TreeNode(1)
        resultNode.right.left = new  TreeNode(1)
        resultNode.right.right.right =  new TreeNode(1)

        expect(mergeTrees(node,node2)).toEqual(resultNode)
    })
})