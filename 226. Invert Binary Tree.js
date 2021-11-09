// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []


Success
Details 
Runtime: 68 ms, faster than 93.93% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 39.8 MB, less than 69.90% of JavaScript online submissions for Invert Binary Tree.



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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root){
        let temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.right)
        invertTree(root.left)
        
    }
    return root
};
