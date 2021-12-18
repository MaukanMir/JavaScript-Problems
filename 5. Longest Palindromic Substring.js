




// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// Success
// Details 
// Runtime: 100 ms, faster than 83.10% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 41.2 MB, less than 83.31% of JavaScript online submissions for Longest Palindromic Substring.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res =""
    let resLen = 0
    
    for(let i =0; i< s.length; i++){
        let l = i
        let r = i
        while(l >=0 && r <s.length && s[l] == s[r]){
            if((r-l +1) > resLen){
                resLen = (r-l +1)
                res = s.slice(l,r+1)
            }
            l-=1
            r +=1
        }
        
        l = i
        r = i+1
        
        while(i>=0 && r <s.length && s[l] == s[r]){
            if(r-l +1> resLen){
                resLen = (r-l +1)
                res = s.slice(l,r+1)
            }
            l-=1
            r +=1
        }
    }
    return res
};
