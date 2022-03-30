Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Success
Details 
Runtime: 69 ms, faster than 69.76% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 42.4 MB, less than 30.11% of JavaScript online submissions for Binary Tree Inorder Traversal.


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
var inorderTraversal = function(root) {
    let stack = [], result = []
    
    while(stack.length>0 || root != null){
        if(root){
            stack.push(root)
            root = root.left
        }else{
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
};


Success
Details 
Runtime: 68 ms, faster than 72.51% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 42.6 MB, less than 9.62% of JavaScript online submissions for Binary Tree Inorder Traversal.

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
var inorderTraversal = function(root) {
  
    var inorder = function(node){
        if(!node){return}
        inorder(node.left)
        result.push(node.val)
        inorder(node.right)
    }
    
    let result = []
    
    inorder(root)
    return result
};

