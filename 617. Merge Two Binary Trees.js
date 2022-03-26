// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

 

// Example 1:


// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]



Success
Details 
Runtime: 104 ms, faster than 92.51% of JavaScript online submissions for Merge Two Binary Trees.
Memory Usage: 46.4 MB, less than 86.51% of JavaScript online submissions for Merge Two Binary Trees.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    
    if(!root1){return root2}
    if(!root2){return root1}
    
    root1.val += root2.val
    
    root1.left = mergeTrees(root1.left,root2.left)
    root1.right = mergeTrees(root1.right,root2.right)
    return root1
};


Success
Details 
Runtime: 126 ms, faster than 67.55% of JavaScript online submissions for Merge Two Binary Trees.
Memory Usage: 50.3 MB, less than 33.86% of JavaScript online submissions for Merge Two Binary Trees.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    
    
    if(root1 == null){return root2}
    let stack = [[root1,root2]]
    
    while(stack.length >0){
        let node = stack.pop()
        
        if(node[0] == null || node[1] == null){continue}
        
        node[0].val += node[1].val
        if(node[0].left == null){
            node[0].left = node[1].left
        }
        else{stack.push([node[0].left, node[1].left])}
        
        if(node[0].right == null){
            node[0].right = node[1].right
            
        }else{stack.push([node[0].right,node[1].right])}
    }
    
    return root1
};
