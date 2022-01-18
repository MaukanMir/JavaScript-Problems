// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

 

// Example 1:


// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4
// Example 2:

// Input: root = [1], target = 4.428571
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 0 <= Node.val <= 109
// -109 <= target <= 109

// Success
// Details 
// Runtime: 76 ms, faster than 95.29% of JavaScript online submissions for Closest Binary Search Tree Value.
// Memory Usage: 42.9 MB, less than 19.51% of JavaScript online submissions for Closest Binary Search Tree Value.


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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    
    
    if(!root){return 0}
    
    let stack = [root]
    target = Math.round(target)
    let minValue =10000
    let key = null
    
    while(stack.length >0){
        let node = stack.pop()
        
        if (node){
            if(node.val == target){return node.val}
            if(node.val > target && node.left){stack.push(node.left)}
            if(node.val < target && node.right){stack.push(node.right)}
            if (minValue > Math.abs(node.val - target)){
                key = node.val
                minValue = Math.abs(node.val - target)
            }
        }
    }
    
    return key
};
