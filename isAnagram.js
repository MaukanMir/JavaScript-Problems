// 242. Valid Anagram
// Easy

// 3496

// 188

// Add to List

// Share
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Success
// Details 
// Runtime: 80 ms, faster than 96.56% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.1 MB, less than 37.95% of JavaScript online submissions for Valid Anagram.





/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let data = {};
    let check = {};
    s.split("").map(element => check[element] == undefined ? check[element] =1: check[element] +=1)
    t.split("").map(element => data[element] == undefined ? data[element] =1: data[element] +=1)
    
    for([key,value] of Object.entries(data)){
        if(!s.includes(key)){return false}
        else if(s.includes(key)){
            if(check[key] > data[key]){return false}
        }
    }
    
    for([key,value] of Object.entries(check)){
        if(!t.includes(key)){return false}
        else if(t.includes(key)){
            if(check[key] > data[key]){return false}
        }
    }
    
    return true
    
    
    
    
};
