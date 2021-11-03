
// 383. Ransom Note
// Easy

// 1255

// 269

// Add to List

// Share
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Success
// Details 
// Runtime: 112 ms, faster than 50.70% of JavaScript online submissions for Ransom Note.
// Memory Usage: 46 MB, less than 9.36% of JavaScript online submissions for Ransom Note.

var canConstruct = function(ransomNote, magazine) {

    let two = {}
    magazine.split("").map(item => two[item] == undefined ? two[item] =1: two[item]+=1)
    console.log(two)
    let ans = ""
    for(let i =0;i< ransomNote.length;i++){
        let check = ransomNote[i]
        
        if(magazine.includes(check) == false){return false}
        else if(two[check] >0){ 
            two[check]-=1
            
            ans += check
        }
    }
    
    return ans == ransomNote
    
};




// Success
// Details 
// Runtime: 96 ms, faster than 81.58% of JavaScript online submissions for Ransom Note.
// Memory Usage: 43.4 MB, less than 20.97% of JavaScript online submissions for Ransom Note.




/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

   var canConstruct = function(ransomNote, magazine) {
    const arr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};
