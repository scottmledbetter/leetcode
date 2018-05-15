/*

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [4,1,2,1,2];

function singleNumber(arr) {
  for (let num of arr) { // Check each number in array
    let num = arr.shift(); // Seperate first value and compare with rest of array
    if (arr.includes(num)) { // If the seperated value is still in the array, it's not the unique number
      arr = arr.filter(n => n !== num); // Remove non-unique number from array
    } else return num; // Will return unique number after testing it for matches against current array
  }
}

console.log(singleNumber(nums));
//Works!

