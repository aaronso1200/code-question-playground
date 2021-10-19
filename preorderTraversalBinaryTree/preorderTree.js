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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let result = []
    constructResult(root, result)
    return result
};

var constructResult = function (root, result) {
    if (root !==null) {
        result.push(root.val)
        constructResult(root.left, result)
        constructResult(root.right, result)
    }
}

module.exports = {
    TreeNode,
    preorderTraversal
}