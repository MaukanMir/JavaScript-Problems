Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Success
Details 
Runtime: 126 ms, faster than 5.37% of JavaScript online submissions for Binary Tree Preorder Traversal.
Memory Usage: 42 MB, less than 76.79% of JavaScript online submissions for Binary Tree Preorder Traversal.


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
    let result = []
    
    var preOrder = function(node){
        if(node){
            result.push(node.val)
            preOrder(node.left)
            preOrder(node.right)
    
        }
    }
    
    preOrder(root)
    
    return result
};
