/**
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
**/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

function numJewelsInStones (J, S) {
    let number = 0;
    for(let i = 0; i < S.length; i++) {
      for(let j = 0; j < J.length; j++) {
        if(S[i] == J[j]) number++;
      }
    }
  return number;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
// Works!
