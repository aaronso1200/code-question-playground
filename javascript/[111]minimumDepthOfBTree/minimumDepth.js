//Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the
//root node down to the nearest leaf node.
//
// Note: A leaf is a node with no children.
//
//
// Example 1:
//
//
//Input: root = [3,9,20,null,null,15,7]
//Output: 2
//
//
// Example 2:
//
//
//Input: root = [2,null,3,null,4,null,5,null,6]
//Output: 5
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [0, 10⁵].
// -1000 <= Node.val <= 1000
//
// Related Topics Tree Depth-First Search Breadth-First Search Binary Tree 👍 36
//62 👎 925


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0
    }

    return minDepthrecur(root,1)
};

function minDepthrecur(root,result) {
    if (root === null) {
        return Number.MAX_SAFE_INTEGER
    }
    if (root.left === null && root.right === null) {
        return result
    }
    return Math.min(minDepthrecur(root.left,result +1),minDepthrecur(root.right,result +1))
}

//leetcode submit region end(Prohibit modification and deletion)


module.exports ={minDepth}