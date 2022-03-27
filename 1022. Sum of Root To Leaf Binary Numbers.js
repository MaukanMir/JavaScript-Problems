

Success
Details 
Runtime: 104 ms, faster than 40.68% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
Memory Usage: 45.4 MB, less than 10.59% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.


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
var sumRootToLeaf = function(root) {
    let stack = [[root,0]], total =0
    
    while(stack.length>0){
        let check = stack.pop()
        let node = check[0], got = check[1]
        
        if(node){
            got = got *2 + node.val
        }
        
        if(!node.right && !node.left){total += got}
        
        if(node.right){stack.push([node.right, got])}
        if(node.left){stack.push([node.left,got])}
    }
    
    return total
};

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.

 

Example 1:


Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
Example 2:

Input: root = [0]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
Node.val is 0 or 1.
