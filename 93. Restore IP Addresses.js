// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

 

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

// Constraints:

// 0 <= s.length <= 20
// s consists of digits only.

// Success
// Details 
// Runtime: 72 ms, faster than 92.19% of JavaScript online submissions for Restore IP Addresses.
// Memory Usage: 40.6 MB, less than 50.13% of JavaScript online submissions for Restore IP Addresses.

// Success
// Details 
// Runtime: 68 ms, faster than 98.49% of JavaScript online submissions for Restore IP Addresses.
// Memory Usage: 40.9 MB, less than 31.99% of JavaScript online submissions for Restore IP Addresses.

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    
    if (s.length > 12){return []}
    
    var backtrack = function(i,dots,curIP){
        if(dots ==4 && i == s.length){
            res.push(curIP.slice(0, curIP.length-1))
            return
        }
        if(dots >4){return}
    
        for(let j=0 ; j < Math.min(i+3, s.length); j++){
            
            if (parseInt(s.slice(i,j+1)) <256 && (i==j || s[i] !="0" )  ){
                backtrack(j+1,dots+1, curIP + s.slice(i,j+1) +".")
            }
        }
        
    }
    
    backtrack(0,0,"")
    return res
};
