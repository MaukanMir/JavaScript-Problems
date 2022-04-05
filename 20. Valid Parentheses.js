Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Success
Details 
Runtime: 64 ms, faster than 88.27% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.6 MB, less than 26.21% of JavaScript online submissions for Valid Parentheses.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], matches = {")": "(", "}": "{", "]": "["}
    
    for(let i =0; i< s.length; i++){
        let item = s[i]
        if(matches[item] && stack.length ==0){return false}
        else if(!matches[item]){stack.push(item)}
        else if(matches[item] && stack.slice(-1)[0] == matches[item]){stack.pop()}
        else{
            return false}
    
    }
    
    return stack.length ==0
};
