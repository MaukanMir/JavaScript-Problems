// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1
 



Success
Details 
Runtime: 76 ms, faster than 91.37% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 41.6 MB, less than 75.59% of JavaScript online submissions for Maximum Depth of Binary Tree.




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
var maxDepth = function(root) {
    
    if(!root){return 0}
    
    return  Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1)

};
