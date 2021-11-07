// 144. Binary Tree Preorder Traversal
// Easy

// 3121

// 106

// Add to List

// Share
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:


// Input: root = [1,2]
// Output: [1,2]
// Example 5:


// Input: root = [1,null,2]
// Output: [1,2]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?








Success
Details 
Runtime: 68 ms, faster than 92.11% of JavaScript online submissions for Binary Tree Preorder Traversal.
Memory Usage: 38.8 MB, less than 55.51% of JavaScript online submissions for Binary Tree Preorder Traversal.


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
var preorderTraversal = function(root) {
    
    let node = root
    let output = []
    
    while(node){
        if(node.left == null){
            output.push(node.val)
            node = node.right
        }else{
            next_up = node.left
            
            while(next_up.right && next_up.right != node){
                next_up = next_up.right
            }
            
            if(!next_up.right){
                output.push(node.val)
                next_up.right = node
                node = node.left
                
            }else{
                next_up.right = node
                node = node.right
            }
        }
    }
    return output
};
