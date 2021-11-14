

// Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

// Implement the TwoSum class:

// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
 

// Example 1:

// Input
// ["TwoSum", "add", "add", "add", "find", "find"]
// [[], [1], [3], [5], [4], [7]]
// Output
// [null, null, null, null, true, false]

// Explanation
// TwoSum twoSum = new TwoSum();
// twoSum.add(1);   // [] --> [1]
// twoSum.add(3);   // [1] --> [1,3]
// twoSum.add(5);   // [1,3] --> [1,3,5]
// twoSum.find(4);  // 1 + 3 = 4, return true
// twoSum.find(7);  // No two integers sum up to 7, return false
 

// Constraints:

// -105 <= number <= 105
// -231 <= value <= 231 - 1
// At most 104 calls will be made to add and find.





var TwoSum = function() {
    this.nums = [];
};

TwoSum.prototype.add = function(number) {
    this.nums.push(number);
};

TwoSum.prototype.find = function(value) {
    const hash = {};
    for (let num of this.nums) {
        if (hash[value - num]) return true;
        else hash[num] = true;
    }
    return false;
};


Success
Details 
Runtime: 1704 ms, faster than 14.28% of JavaScript online submissions for Two Sum III - Data structure design.
Memory Usage: 79.5 MB, less than 26.67% of JavaScript online submissions for Two Sum III - Data structure design.
