// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

Success
Details 
Runtime: 236 ms, faster than 87.64% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 73.5 MB, less than 69.94% of JavaScript online submissions for Minimum Depth of Binary Tree.


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
    
    if(root == null){return 0}
    if(root.right == null && root.left == null){return 1}
    if(root.right == null){return 1 + minDepth(root.left)}
    if(root.left == null){return 1+ minDepth(root.right)}
    
    return Math.min( minDepth(root.right)+1, minDepth(root.left)+1)
};
