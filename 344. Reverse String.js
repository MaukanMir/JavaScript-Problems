// MUST USE RECURSION EVEN THOUGH USERS DID NOT USE RECURSION TO SOLVE THE PROBLEM


// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.



// Success
// Details 
// Runtime: 146 ms, faster than 19.62% of JavaScript online submissions for Reverse String.
// Memory Usage: 45.8 MB, less than 90.46% of JavaScript online submissions for Reverse String.



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let left = 0;
    let right = s.length-1
    
    while (left< right){
        
        helped(s,left,right)
        left +=1
        right -=1
    }
    return
};

var helped = function(array,left,right){
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp;
    return array,left,right
}
