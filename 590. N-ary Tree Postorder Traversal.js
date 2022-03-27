Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

 

Example 1:


Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
Example 2:


Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The height of the n-ary tree is less than or equal to 1000.


Success
Details 
Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for N-ary Tree Postorder Traversal.
Memory Usage: 45.7 MB, less than 46.56% of JavaScript online submissions for N-ary Tree Postorder Traversal.


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    
    if(root == null){return []}
    
    let stack = [root], result = []
    
    while(stack.length >0){
        let node = stack.pop()
        
        if(node){
            result.push(node.val)
            
            node.children.forEach(item=>{
                stack.push(item)
            })
        }
    }
    
    return result.reverse()
};
