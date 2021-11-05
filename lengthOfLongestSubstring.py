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
Runtime: 60 ms, faster than 81.58% of Python3 online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 14.3 MB, less than 80.52% of Python3 online submissions for Longest Substring Without Repeating Characters.
Next challenges:
  
  
  
  
  
  
  class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        ans = 0
        i = 0
        seen = {}
        
        for j in range(len(s)):
            check = s[j]
            if check in seen:
                i = max(seen[check],i)
            
            ans = max(ans, j-i+1)
            seen[check] = j+1
        return ans
        
