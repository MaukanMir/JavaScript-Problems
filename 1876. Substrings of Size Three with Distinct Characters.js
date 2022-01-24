// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".


Success
Details 
Runtime: 76 ms, faster than 87.81% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.
Memory Usage: 42.2 MB, less than 14.63% of JavaScript online submissions for Substrings of Size Three with



/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    
    let start =0;
    let end = start +3
    let count =0;
    
    while (end <= s.length){
        if (s.slice(start,end) == [...new Set(s.slice(start,end))].join("")  ){count ++}
        start ++
        end ++
    }
    return count
};
