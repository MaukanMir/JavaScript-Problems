

Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

Example 1:


Input: root = [2,1,3]
Output: 1
Example 2:


Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

Success
Details 
Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Find Bottom Left Tree Value.
Memory Usage: 46.2 MB, less than 5.28% of JavaScript online submissions for Find Bottom Left Tree Value.


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
var findBottomLeftValue = function(root) {
    
    let values = [-1,0]
    
    var dfs = function(node,level){
        if (!node){
            return
        }
        
        if(level > values[0]){
            values[0] = level
            values[1] = node.val
        }
        
        dfs(node.left,level+1)
        dfs(node.right, level+1)
    }
    
    dfs(root,0)
    return values[1]
};
