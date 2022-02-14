Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Success
Details 
Runtime: 56 ms, faster than 98.76% of JavaScript online submissions for Reverse Only Letters.
Memory Usage: 42.6 MB, less than 16.18% of JavaScript online submissions for Reverse Only Letters.


/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
    s = s.split("")
    let leftPointer = 0
    let rightPointer = s.length-1
    s[leftPointer].replace(/[^a-zA-Z]/g, "")
    while(leftPointer < rightPointer){
        if( s[leftPointer].replace(/[^a-zA-Z]/g, "").length ==0  && s[rightPointer].replace(/[^a-zA-Z]/g, "").length ==0  ){
            leftPointer +=1
            rightPointer -=1
            continue
        }
        
        if( s[leftPointer].replace(/[^a-zA-Z]/g, "").length ==0   ){leftPointer ++; continue;}
        if(s[rightPointer].replace(/[^a-zA-Z]/g, "").length ==0 ){rightPointer --; continue}
        
        
        let temp = s[leftPointer]
        let temp2 = s[rightPointer]
        s[leftPointer] = temp2
       
        s[rightPointer] = temp
        leftPointer ++;
        rightPointer --;
        
    }
    
    return s.join("")
};
