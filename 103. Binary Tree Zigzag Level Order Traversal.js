Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100

Success
Details 
Runtime: 60 ms, faster than 96.87% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
Memory Usage: 44.2 MB, less than 34.59% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.


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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    if(!root){return []}
    
    let stack = [[root,0]], levels = {}
    
    while (stack.length >0){
        let check = stack.shift()
        let node = check[0], lvl = check[1]
        
        if(node.left){stack.push([node.left, lvl+1])}
        if(node.right){stack.push([node.right, lvl+1])}
        
        if(node && levels[lvl] == undefined){levels[lvl] = [node.val]}
        else if(node && levels[lvl]){levels[lvl].push(node.val)}
    }
    

    return Object.entries(levels).map((item, idx)=> idx %2 ==0 ? item[1]: item[1].reverse())

};
