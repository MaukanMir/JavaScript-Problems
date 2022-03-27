Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: 3
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
 

Constraints:

The total number of nodes is in the range [0, 104].
The depth of the n-ary tree is less than or equal to 1000.

Success
Details 
Runtime: 80 ms, faster than 81.95% of JavaScript online submissions for Maximum Depth of N-ary Tree.
Memory Usage: 45.6 MB, less than 30.00% of JavaScript online submissions for Maximum Depth of N-ary Tree.



/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){return 0}
    
    let stack = [[root,0]], maxV = -1
    
    while(stack.length >0){
        let check = stack.pop()
        maxV = Math.max(maxV,check[1]+1)
        if(check[0]){
            check[0].children.forEach(item =>{
                stack.push([item,check[1] +1])
            })
        }
    }
    
    return maxV
};
