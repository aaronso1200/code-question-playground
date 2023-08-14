/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    return traverse(root,targetSum,0)
};

var traverse = function(root,targetSum,curValue) {
    if (!root) return false
    if (!root.left && !root.right) {
        curValue = curValue + root.val
        return curValue === targetSum;
    }
    return traverse(root.left,targetSum,curValue + root.val) || traverse(root.right,targetSum,curValue + root.val)
}


module.exports = {
    TreeNode,
    hasPathSum
}