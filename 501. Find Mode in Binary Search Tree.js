


Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [1,null,2,2]
Output: [2]
Example 2:

Input: root = [0]
Output: [0]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

Success
Details 
Runtime: 102 ms, faster than 68.44% of JavaScript online submissions for Find Mode in Binary Search Tree.
Memory Usage: 49.9 MB, less than 62.46% of JavaScript online submissions for Find Mode in Binary Search Tree.

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
var findMode = function(root) {
    
    let stack = [root], track = {}, maxValue = null
    
    while (stack.length >0){
        let node = stack.pop()
        
        if(node){
            if(track[node.val] != undefined){track[node.val] +=1; maxValue = Math.max(maxValue, track[node.val])}
            else{track[node.val] =1; maxValue = Math.max(maxValue, track[node.val])}
        }
        if(node.left){stack.push(node.left)}
        if(node.right){stack.push(node.right)}
    }
    
    let seen = Object.keys(track), final = []
    seen.forEach(item=>{
        if(track[item] == maxValue){final.push(item)}
    })
  
    return final
};
