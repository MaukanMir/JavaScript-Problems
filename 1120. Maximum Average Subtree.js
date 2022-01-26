// Given the root of a binary tree, return the maximum average value of a subtree of that tree. Answers within 10-5 of the actual answer will be accepted.

// A subtree of a tree is any node of that tree plus all its descendants.

// The average value of a tree is the sum of its values, divided by the number of nodes.

 

// Example 1:


// Input: root = [5,6,1]
// Output: 6.00000
// Explanation: 
// For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
// For the node with value = 6 we have an average of 6 / 1 = 6.
// For the node with value = 1 we have an average of 1 / 1 = 1.
// So the answer is 6 which is the maximum.
// Example 2:

// Input: root = [0,null,1]
// Output: 1.00000
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 0 <= Node.val <= 105

Success
Details 
Runtime: 119 ms, faster than 51.47% of JavaScript online submissions for Maximum Average Subtree.
Memory Usage: 45.1 MB, less than 44.12% of JavaScript online submissions for Maximum Average Subtree.



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
var maximumAverageSubtree = function(root) {
    
    if(!root){return 0}
    
    let maxVal = -1
    
    var dfs = function(node){
        if(!node){
            return [0,0]
        }
        
        const [leftSum, leftCount] = dfs(node.left)
        const [rightSum, rightCount] = dfs(node.right)
        let total = leftSum + rightSum + node.val
        let count = leftCount + rightCount +1
       
        maxVal = Math.max(maxVal,total/count)
        return [total,count]
    }
    
    dfs(root)
    
    return maxVal
    
};
