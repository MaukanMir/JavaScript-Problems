

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2


Success
Details 
Runtime: 72 ms, faster than 85.82% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 45.8 MB, less than 13.70% of JavaScript online submissions for Maximum Depth of Binary Tree.


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
var maxDepth = function(root) {
    if(!root){return 0}
    
    let stack = [[root,0]], maxValue = -1
    
    while(stack.length >0){
        let check = stack.pop()
        let node = check[0], dist = check[1]
        
        maxValue = Math.max(dist+1, maxValue)
        
        if(node.left){stack.push([node.left, dist+1])}
        if(node.right){stack.push([node.right,dist+1])}
    }
    
    return maxValue
};
