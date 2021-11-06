


// 243. Shortest Word Distance
// Easy

// 859

// 72

// Add to List

// Share
// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3
// Example 2:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1
 

// Constraints:

// 1 <= wordsDict.length <= 3 * 104
// 1 <= wordsDict[i].length <= 10
// wordsDict[i] consists of lowercase English letters.
// word1 and word2 are in wordsDict.
// word1 != word2



Success
Details 
Runtime: 79 ms, faster than 59.77% of JavaScript online submissions for Shortest Word Distance.
Memory Usage: 40 MB, less than 43.97% of JavaScript online submissions for Shortest Word Distance.


/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let indexOne = -1;
    let indexTwo = -1;
    
    let min_distance = wordsDict.length
    
    for(let i =0;i<wordsDict.length;i++){
        if(wordsDict[i] == word1){indexOne = i;}
        else if(wordsDict[i] == word2){indexTwo =i}
    
        if(indexOne != -1 && indexTwo != -1){
            min_distance = Math.min(min_distance, Math.abs(indexOne - indexTwo))
           
        }
        
    }
    
    return min_distance
};
