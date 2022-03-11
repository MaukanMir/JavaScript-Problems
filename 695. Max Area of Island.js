You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 
Success
Details 
Runtime: 228 ms, faster than 6.41% of JavaScript online submissions for Max Area of Island.
Memory Usage: 48.3 MB, less than 19.68% of JavaScript online submissions for Max Area of Island.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    const ROWS = grid.length, COLS = grid[0].length
    let routes = {}
    
    var dfs = function(r,c){
        if(r <0 || r>= ROWS || c<0 || c>= COLS || routes[[r,c]] != undefined || grid[r][c] ==0){
            return 0
        }
        
        routes[[r,c]] =1
        return (1 + 
                dfs(r+1,c) +
                dfs(r-1,c) +
                dfs(r,c+1) +
                dfs(r,c-1)
               
               )
    }
    
    
    let score = 0
    
    for(let r =0; r< ROWS;r++){
        for(let c= 0;c< COLS;c++){
            if(grid[r][c] ==1){
                score = Math.max(score, dfs(r,c))
            }
        }
    }
    
    return score
};
