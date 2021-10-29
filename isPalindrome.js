// 9. Palindrome Number
// Easy

// 4255

// 1895

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false









// Success
// Details 
// Runtime: 180 ms, faster than 83.61% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.2 MB, less than 70.04% of JavaScript online submissions for Palindrome Number.


var isPalindrome = function(x) {
    return parseInt(x.toString().split("").reverse().join("")) == x
};
