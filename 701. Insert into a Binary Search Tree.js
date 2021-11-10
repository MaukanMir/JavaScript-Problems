
// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:

// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]
 

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -108 <= Node.val <= 108
// All the values Node.val are unique.
// -108 <= val <= 108
// It's guaranteed that val does not exist in the original BST.


Success
Details 
Runtime: 116 ms, faster than 93.69% of JavaScript online submissions for Insert into a Binary Search Tree.
Memory Usage: 46.9 MB, less than 80.46% of JavaScript online submissions for Insert into a Binary Search Tree.



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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let node = root
    
    while(node){
        
        if (val > node.val){
             if (node.right == null){
                node.right = new TreeNode(val)
                return root
        }else{node = node.right}
            
        }
        
        else{
            if(node.left == null){
                node.left = new TreeNode(val)
                return root
            }else{
                node = node.left
            }
        }
     
    }
    
    return new TreeNode(val)
};



Success
Details 
Runtime: 108 ms, faster than 99.85% of JavaScript online submissions for Insert into a Binary Search Tree.
Memory Usage: 47.3 MB, less than 48.92% of JavaScript online submissions for Insert into a Binary Search Tree.


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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null){return new TreeNode(val)}

        if(root.val < val){
            root.right = insertIntoBST(root.right,val)
        }else{
            root.left = insertIntoBST(root.left,val)
        }
    
    return root
};


