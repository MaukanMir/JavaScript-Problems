Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


Success
Details 
Runtime: 93 ms, faster than 77.88% of JavaScript online submissions for Palindromic Substrings.
Memory Usage: 42.7 MB, less than 63.64% of JavaScript online submissions for Palindromic Substrings.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let palis =0
    
    for(let i =0; i< s.length; i++){
        palis += findPalis(s,i,i)
        palis += findPalis(s,i,i+1)
    }
    
    return palis
};

var findPalis = function(str,lo,high){
    let total =0
    
    while(lo>=0 && high < str.length){
        if(str[lo] != str[high]){break}
        
        lo--
        high++
        total++
    }
    
    return total
}
