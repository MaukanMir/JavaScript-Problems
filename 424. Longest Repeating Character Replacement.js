// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.


Success
Details 
Runtime: 80 ms, faster than 96.28% of JavaScript online submissions for Longest Repeating Character Replacement.
Memory Usage: 39.9 MB, less than 76.92% of JavaScript online submissions for Longest Repeating Character Replacement.



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {};
    let leftPointer =0;
    let maxCount =0
    let result =0;
    
    for(let rightPointer =0; rightPointer < s.length; rightPointer++){
        count[s[rightPointer]] == undefined ? count[s[rightPointer]] =1: count[s[rightPointer]] +=1
        maxCount = Math.max(maxCount, count[s[rightPointer]])
        
        while((rightPointer - leftPointer +1) - maxCount > k){
            count[s[leftPointer]] -=1
            leftPointer +=1
        }
        
        result = Math.max(result, rightPointer - leftPointer +1)
    }
    return result
};


Success
Details 
Runtime: 85 ms, faster than 83.64% of JavaScript online submissions for Longest Repeating Character Replacement.
Memory Usage: 43.6 MB, less than 40.55% of JavaScript online submissions for Longest Repeating Character Replacement.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxValue =0, count = {}, left = 0, res =0
    
    for(let r=0; r< s.length; r++){
        if(count[s[r]] == undefined){count[s[r]] =1}
        else if(count[s[r]] != undefined){count[s[r]] +=1}
        
        maxValue = Math.max(maxValue, count[s[r]])
        
        if( (r - left +1) - maxValue >k ){
            count[s[left]] -=1
            left ++
            
        }
        res = Math.max(r-left +1, res)
    }
    
    return res
};
