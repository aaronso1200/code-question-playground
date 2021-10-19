const order = require('./order.js')
const TreeNode = require('./order.js').TreeNode

describe('order function', ()=> {
    test('balance tree should construct properly',()=> {
        let input = new TreeNode(3)
        input.left = new TreeNode(9)
        input.right = new TreeNode(20)
        input.right.left = new TreeNode(15)
        input.right.right = new TreeNode(7)
        expect(order.levelOrder(input)).toEqual([[3],[9,20],[15,7]])
    })
    test('null should construct properly',()=> {
        expect(order.levelOrder(null)).toEqual([])
    })
    test('unbalance tree should construct properly',()=> {
        let input = new TreeNode(3)
        input.left = new TreeNode(9)
        input.left.left = new TreeNode(20)
        input.left.left.left = new TreeNode(15)
        input.left.left.left.left = new TreeNode(7)
        expect(order.levelOrder(input)).toEqual([[3],[9],[20],[15],[7]])
    })
})