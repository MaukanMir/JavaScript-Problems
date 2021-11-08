// 344. Reverse String
// Easy

// 3280

// 845

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters s.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


Success
Details 
Runtime: 96 ms, faster than 95.72% of JavaScript online submissions for Reverse String.
Memory Usage: 46.1 MB, less than 42.34% of JavaScript online submissions for Reverse String.




/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left =0
    let right = s.length-1
    
    while(left <right){
        [s[right],s[left]] = [s[left],s[right]]
        left +=1
        right -=1
    }
};
