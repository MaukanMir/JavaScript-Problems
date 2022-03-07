Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.

Success
Details 
Runtime: 111 ms, faster than 51.01% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 48.1 MB, less than 55.19% of JavaScript online submissions for Reverse Words in a String III.


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    return s.split(" ").map(item => item.split("").reverse().join("") ).join(" ")
};
