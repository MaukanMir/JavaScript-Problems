// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

// Success
// Details 
// Runtime: 324 ms, faster than 14.56% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 91.7 MB, less than 39.37% of JavaScript online submissions for Range Sum of BST.


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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(root == null){return 0}
    
    let ans =0
    
    if( low <= root.val && root.val <= high){ans += root.val}
    if(low < root.val){ ans += rangeSumBST(root.left,low,high)}
    if(high > root.val){ ans += rangeSumBST(root.right,low,high)}
    return ans
};


Success
Details 
Runtime: 188 ms, faster than 98.56% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 96.7 MB, less than 37.90% of JavaScript online submissions for Range Sum of BST.
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let total = 0, stack = [root]
    
    while(stack.length>0){
        let node = stack.pop()
        
        if(node != null){
            
            if(node.val >= low && node.val <=high){total += node.val}
            if(node.left){stack.push(node.left)}
            if(node.right){stack.push(node.right)}
        }
    }
    return total
};
