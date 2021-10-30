
// 58. Length of Last Word
// Easy

// 259

// 33

// Add to List

// Share
// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.




// Success
// Details 
// Runtime: 76 ms, faster than 65.04% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 40.3 MB, less than 7.20% of JavaScript online submissions for Length of Last Word.



var lengthOfLastWord = function(s) {
    if(!s){return 0}
    let reversed_s = s.split("").reverse().join("").trimStart()
    
    for (let i=0;i<reversed_s.length;i++){
        if (reversed_s[i] ==" "){return i}
    }
    return (reversed_s).length
  
  
  
//   Success
// Details 
// Runtime: 68 ms, faster than 91.79% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 38.7 MB, less than 45.15% of JavaScript online submissions for Length of Last Word.
  
  var lengthOfLastWord = function(s) {
    if(!s){return 0}
    s = s.trim()
    for(let i =s.length-1;i>=0;i--){
        if(s[i] ==" "){return (s.length) -(i+1) }
    }
    
    return s.length
};
