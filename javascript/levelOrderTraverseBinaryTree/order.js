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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === undefined) {
        return []
    }
    const result = []
    const queue = []
    queue.push({root: root, level: 0})
    while (queue.length > 0) {
        const currentNode = queue.shift()
        if (currentNode.root !== null) {
            if (!result[currentNode.level]) {
                result[currentNode.level] = []
            }

            result[currentNode.level].push(currentNode.root.val)
            queue.push({root: currentNode.root.left, level: currentNode.level + 1})
            queue.push({root: currentNode.root.right, level: currentNode.level + 1})
        }
    }
    return result
};

module.exports = {
    levelOrder,
    TreeNode
}