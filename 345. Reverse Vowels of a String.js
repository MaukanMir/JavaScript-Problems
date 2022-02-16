Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.


Success
Details 
Runtime: 80 ms, faster than 95.17% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 48 MB, less than 39.64% of JavaScript online submissions for Reverse Vowels of a String.


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let leftPointer =0
    let rightPointer = s.length-1
    s = s.split("")
    let vowels = 'aeiouAEIOU'
    
    while(leftPointer < rightPointer){
        if(!vowels.includes(s[leftPointer]) && !vowels.includes(s[rightPointer])){
            leftPointer ++
            rightPointer --
        }else if(vowels.includes(s[leftPointer]) && vowels.includes(s[rightPointer])){
            let one = s[leftPointer]
            s[leftPointer] = s[rightPointer]
            s[rightPointer] = one
            leftPointer ++
            rightPointer --
            
        }
        else if(vowels.includes(s[leftPointer]) && !vowels.includes(s[rightPointer])){
            rightPointer --
        }
        else if(!vowels.includes(s[leftPointer])){
            leftPointer ++
        }
    }
    
    return s.join("")
};
