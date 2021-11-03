

// 20. Valid Parentheses
// Easy

// 9614

// 381

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true






// Success
// Details 
// Runtime: 68 ms, faster than 94.88% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 39.7 MB, less than 47.08% of JavaScript online submissions for Valid Parentheses.



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    parens = s
    let opening = '([{'
   let  closing = ']})'
   let  match = {")":"(","}":"{",']':'['}
   let stack = []
   
   for(let i =0;i<parens.length;i++){
     let check = parens[i]
     if(closing.includes(check) && stack == []){return false}
     
     else if(opening.includes(check)){stack.push(check)}
     
     else if(closing.includes(check)){
       
       if(match[check] != stack[stack.length-1]){return false}
       else if(match[check] == stack[stack.length-1]){stack.pop()}
     }
   }
  return stack ==0
};
