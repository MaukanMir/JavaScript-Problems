// 145. Binary Tree Postorder Traversal
// Easy

// 3311

// 128

// Add to List

// Share
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:


// Input: root = [1,2]
// Output: [2,1]
// Example 5:


// Input: root = [1,null,2]
// Output: [2,1]
 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100



Success
Details 
Runtime: 64 ms, faster than 97.54% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 39 MB, less than 26.39% of JavaScript online submissions for Binary Tree Postorder Traversal.




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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr = [];
    if(!root){return []}
    
    return findMe(root,arr)
};

var findMe = function(root,arr){
    if(!root){return [] }
    
    findMe(root.left,arr)
    findMe(root.right,arr)
    arr.push(root.val)
    return arr
}
