const {hasPathSum} = require("./pathSum");

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
        expect(hasPathSum(node,2)).toEqual(true)
    })
})