// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

// Example 1:


// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]
// Example 2:


// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]

// Success
// Details 
// Runtime: 188 ms, faster than 60.95% of JavaScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 51 MB, less than 75.15% of JavaScript online submissions for All Elements in Two Binary Search Trees.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    var dfs = function(node){
        if( !node){return}
        
        if(node){
            values.push(node.val)
        }
        if(node.left){
            dfs(node.left)
        }
        
        if(node.right){
            dfs(node.right)
        }
    }
    
    let values = []
    
    dfs(root1)
    dfs(root2)
    
    return values.sort(function(a,b){return a-b})
};
