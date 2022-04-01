Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

Success
Details 
Runtime: 68 ms, faster than 98.77% of JavaScript online submissions for Average of Levels in Binary Tree.
Memory Usage: 47.1 MB, less than 64.05% of JavaScript online submissions for Average of Levels in Binary Tree.



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
var averageOfLevels = function(root) {
    
    
    let result = [], stack = [root]
    
    while(stack.length >0){
        let total =0, nodes = stack.length
        for(let i =0; i< nodes; i++){
            let node = stack.shift()
            if(node.left){stack.push(node.left)}
            if(node.right){stack.push(node.right)}
            total += node.val
        }
        result.push(total/nodes)
    }
    
    return result
};
