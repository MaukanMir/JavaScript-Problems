Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let values = []
    
    var backtrack = function(check, l, r){
        if(check.length == n*2){
            values.push(check)
        }
        
        if(l < r){
            return
        }
        
        if (l < n){
            backtrack(check +"(", l+1,r)
        }
        if(l>r){
            backtrack(check + ")", l, r+1)
        }
    }
    
    backtrack("",0,0)
    return values
};

Success
Details 
Runtime: 56 ms, faster than 99.92% of JavaScript online submissions for Generate Parentheses.
Memory Usage: 42.5 MB, less than 13.93% of JavaScript online submissions for Generate Parentheses.
