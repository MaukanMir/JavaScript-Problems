Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

Success
Details 
Runtime: 60 ms, faster than 95.96% of JavaScript online submissions for Leaf-Similar Trees.
Memory Usage: 45.1 MB, less than 6.25% of JavaScript online submissions for Leaf-Similar Trees.

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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    let stack1 = [root1], stack2 = [root2], one = [], two = [], count =0
    
    while(stack1.length >0){
        let node = stack1.pop()
    
        if(!node.left && !node.right){one.push(node.val)}
        if(node.left){stack1.push(node.left)}
        if(node.right){stack1.push(node.right)}
    }
    
    while(stack2.length>0){
        let node = stack2.pop()
    
        if(!node.left && !node.right){
        two.push(node.val); count++
                  
                                     }
        if(node.left){stack2.push(node.left)}
        if(node.right){stack2.push(node.right)}
        
    }
    
    if (one.length != two.length){return false}
    
    for(let i =0; i< count; i++ ){
        if(one[i] != two[i]){return false}
    }
    return true

    
    
};
