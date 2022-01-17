Given the root of a binary tree, return the sum of all left leaves.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000

Runtime: 114 ms, faster than 25.00% of JavaScript online submissions for Sum of Left Leaves.
Memory Usage: 40.3 MB, less than 92.71% of JavaScript online submissions for Sum of Left Leaves.


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
var sumOfLeftLeaves = function(root) {
  
    return process(root,false)
};

var process = function(root,isLeft){
    if(root.left == null && root.right == null){
        return isLeft == true ? root.val : 0
    }
    
    let total =0
    
    if(root.left != null){
        total += process(root.left, true)
    }
    
    if(root.right != null){
        total += process(root.right, false)
    }
    
    return total
}
