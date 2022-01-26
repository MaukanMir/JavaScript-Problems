Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

Success
Details 
Runtime: 72 ms, faster than 99.60% of JavaScript online submissions for Kth Smallest Element in a BST.
Memory Usage: 45.6 MB, less than 26.06% of JavaScript online submissions for Kth Smallest Element in a BST.


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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    
    if( !root){
        return 0
    }
    let values = []
    var dfs = function(node){
        if( !node){
            return
        }
        
        dfs(node.left)
        values.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return values[k-1]
};
