
// 102. Binary Tree Level Order Traversal
// Medium

// 6274

// 127

// Add to List

// Share
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

Success
Details 
Runtime: 72 ms, faster than 93.21% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 40.4 MB, less than 84.78% of JavaScript online submissions for Binary Tree Level Order Traversal.



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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    let stages = []
    if(!root){return stages}
    
    var Traverse = function(root,stage){
        if(stages.length == stage){stages.push([])}
        
        stages[stage].push(root.val)
        
        if(root.left){ Traverse(root.left, stage+1)}
        if(root.right){Traverse(root.right,stage+1)}
        
        
    }
    
    Traverse(root,0)
    return stages
};
