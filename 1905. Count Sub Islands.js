You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

Return the number of islands in grid2 that are considered sub-islands.

 

Example 1:


Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
Example 2:


Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.

Success
Details 
Runtime: 140 ms, faster than 98.68% of JavaScript online submissions for Count Sub Islands.
Memory Usage: 59.7 MB, less than 75.00% of JavaScript online submissions for Count Sub Islands.


/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    
    let ROWS = grid1.length;
    let COLS = grid1[0].length;
    let islands =0;
    
    var dfs = function(r,c){
        if(r <0 || r>= ROWS || c< 0 || c>= COLS || grid2[r][c] == 0){
            return true
        }
        
        grid2[r][c] =0
        let check = true
        if(grid1[r][c] ==0){
            check = false
        }
        
            check = dfs(r+1, c) && check
            check = dfs(r-1,c) && check
            check = dfs(r,c+1) && check
            check = dfs(r,c-1) && check
        
            return check
    }
    
    
    
    
    
    
    
    for(let r =0; r< ROWS; r++){
        for(let c = 0; c< COLS; c++){
            if( grid2[r][c] ==1 && dfs(r,c)){
                islands++
            }
        }
    }
    
    
    return islands
};
