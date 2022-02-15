Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.


Success
Details 
Runtime: 6200 ms, faster than 5.02% of JavaScript online submissions for Word Search.
Memory Usage: 48.3 MB, less than 20.52% of JavaScript online submissions for Word Search.


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let ROWS = board.length
    let COLS = board[0].length
    let visited = {}
    
    var dfs = function(r,c,pos){
        if (pos == word.length){
            return true
        }
        if(r <0 || r>= ROWS || c< 0 || c>= COLS || board[r][c] != word[pos] || visited[[r,c]] != undefined){return false}
        
        visited[[r,c]] = board[r][c]
        
        let result = (
            dfs(r+1,c, pos+1) ||
            dfs(r-1,c, pos+1)||
            dfs(r,c+1, pos+1)||
            dfs(r,c-1, pos+1)
            )
        
        delete visited[[r,c]]
        return result
    }
    
    for(let r=0; r< ROWS; r++){
        for(let c=0; c< COLS; c++){
            if(dfs(r,c,0) == true){return true}
        }
    }
    
    return false
};
