/**
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
**/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

function shortestToChar(S, C) {
    let number = [];
    for (let i = 0; i < S.length - 1; i++) {
      
      let closestForward = null;
      for (let forward = i; forward < S.length; forward++) {
        if (S[forward] == C) {
          closestForward = forward;
        }
      }
      
      let closestBackward = null;
      for (let backward = i; backward >= 0; backward--) {
        if (S[backward] == C) {
          closestBackward = backward;
        }
      }
      
      return closestForward < closestBackward ? number.push(closestForward) : number.push(closestBackward);
      
    }
    return number = [];
};

console.log(shortestToChar("loveleetcode", "e"));
//Works!
