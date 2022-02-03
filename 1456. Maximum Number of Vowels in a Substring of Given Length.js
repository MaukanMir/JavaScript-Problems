Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.


Success
Details 
Runtime: 88 ms, faster than 97.22% of JavaScript online submissions for Maximum Number of Vowels in a Substring of Given Length.
Memory Usage: 45.4 MB, less than 18.06% of JavaScript online submissions for Maximum Number of Vowels in a Substring of Given Length.


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    let count =0
    let vowels = 'aeiou'
    
    for(let i =0; i< k; i++){
        if (vowels.includes(s[i])){count ++}
    }
    
    let maxAmount = count;
    
    for(let i =0; i< s.length -k; i++){
        if(vowels.includes(s[i])){count--}
        
        if(vowels.includes(s[i+k])){
            count++
        }
        
        maxAmount =Math.max(maxAmount,count)
    }
    
    return maxAmount
};
