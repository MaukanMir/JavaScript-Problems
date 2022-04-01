

Success
Details 
Runtime: 72 ms, faster than 67.10% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 42.4 MB, less than 25.53% of JavaScript online submissions for Binary Tree Postorder Traversal.


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
    let result = []
    var postOrder = function(node){
        if(node){
            postOrder(node.left)
            postOrder(node.right)
            result.push(node.val)
        }
    }
    
    postOrder(root)
    return result
};
