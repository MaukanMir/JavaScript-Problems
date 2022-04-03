// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

Success
Details 
Runtime: 101 ms, faster than 26.32% of JavaScript online submissions for Same Tree.
Memory Usage: 39.7 MB, less than 76.63% of JavaScript online submissions for Same Tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    if(p == null && q == null){return true}
    if(p == null || q == null){return false}
    if(p.val != q.val){return false}
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};


Success
Details 
Runtime: 64 ms, faster than 84.08% of JavaScript online submissions for Same Tree.
Memory Usage: 42.5 MB, less than 46.89% of JavaScript online submissions for Same Tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let stack = [[p,q]]
    
    while(stack.length >0){
        let check = stack.pop()
        let node = check[0], node2 = check[1]
        
        if( node && node2 && node.val === node2.val){
            stack.push([node.left, node2.left])
            stack.push([node.right, node2.right])
        }
        
        else if( node || node2){return false}
    }
    
    return true
};
