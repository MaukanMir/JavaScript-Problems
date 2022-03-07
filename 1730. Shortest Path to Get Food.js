You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

You are given an m x n character matrix, grid, of these different types of cells:

'*' is your location. There is exactly one '*' cell.
'#' is a food cell. There may be multiple food cells.
'O' is free space, and you can travel through these cells.
'X' is an obstacle, and you cannot travel through these cells.
You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

 

Example 1:


Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
Output: 3
Explanation: It takes 3 steps to reach the food.
Example 2:


Input: grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
Output: -1
Explanation: It is not possible to reach the food.
Example 3:


Input: grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
Output: 6
Explanation: There can be multiple food cells. It only takes 6 steps to reach the bottom food.
 

Success
Details 
Runtime: 284 ms, faster than 16.49% of JavaScript online submissions for Shortest Path to Get Food.
Memory Usage: 58.6 MB, less than 26.07% of JavaScript online submissions for Shortest Path to Get Food.


/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    
    var bfs = function(r,c, ROWS, COLS){
        let queue = [[r,c,0]]
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let routes = {}
        
        while(queue.length >0){
            let check = queue.shift()
            r = check[0]
            c= check[1]
            let dist = check[2]
            
            if(grid[r][c] =='#'){return dist}
            
            for(let i =0; i< directions.length; i++){
                let X = r +directions[i][0]
                let Y= c+ directions[i][1]
                
                if(X>=0 && X< ROWS && Y >=0 && Y <COLS && routes[[X,Y]] == undefined && grid[X][Y] !='X'){
                    routes[[X,Y]] =1
                    queue.push([X,Y, dist+1])
                }  
            }
        }
        
        return -1
    }
    
    
    const ROWS = grid.length, COLS = grid[0].length
    
    for(let r =0; r<ROWS;r++){
        for(let c=0; c<COLS;c++){
            if(grid[r][c] =='*'){return bfs(r,c,ROWS, COLS)}
        }
    }
};
