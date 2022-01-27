Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

 

Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]


Success
Details 
Runtime: 76 ms, faster than 98.98% of JavaScript online submissions for Find Largest Value in Each Tree Row.
Memory Usage: 46.9 MB, less than 5.08% of JavaScript online submissions for Find Largest Value in Each Tree



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
var largestValues = function(root) {
    if(!root){return []}
    
    let queue = [root]
    let values = []
    while(queue.length>0){
        let size = queue.length
        let maxVal = -2147483648
        
        for(let i =0; i< size; i++){
            let node = queue.shift()
           
            maxVal = Math.max(maxVal, node.val)
            
            if(node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right)
            }
            
           
        }
        values.push(maxVal)
        
        
        
    }
    
    return values
};
