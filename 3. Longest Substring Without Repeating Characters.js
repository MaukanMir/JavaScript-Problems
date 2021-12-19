# 3. Longest Substring Without Repeating Characters
# Medium

# 18624

# 853

# Add to List

# Share
# Given a string s, find the length of the longest substring without repeating characters.

 

# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
# Example 4:

# Input: s = ""
# Output: 0


Success
Details 
Runtime: 112 ms, faster than 71.43% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 44.7 MB, less than 48.23% of JavaScript online submissions for Longest Substring Without Repeating Characters.
  
  
  
  
  
var lengthOfLongestSubstring = function(s) {
    let seen = {}
    let ans = 0
    let i =0
    
    for(let j =0;j<s.length;j++){
        let check = s[j]
        if(seen[check] != undefined){
            i = Math.max(seen[check],i)
        }
        
        ans = Math.max(ans,j-i+1)
        seen[check] = j+1
    }
    
    return ans
};
        


Success
Details 
Runtime: 92 ms, faster than 94.55% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 43.1 MB, less than 80.16% of JavaScript online submissions for Longest Substring Without Repeating Characters.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let charSet = new Set();
    let LeftPointer = 0;
    let result =0;
    for(let rightPointer =0; rightPointer< s.length; rightPointer++){
        while(charSet.has(s[rightPointer])){
            charSet.delete(s[LeftPointer])
            LeftPointer +=1
        }
        charSet.add(s[rightPointer])
         result = Math.max(result, rightPointer - LeftPointer +1)
    }
    
    return result
};
