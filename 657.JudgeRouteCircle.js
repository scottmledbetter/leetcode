/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
*/

/**
 * @param {string} moves
 * @return {boolean}
 */

function judgeCircle(moves) {
  const moveArr = moves.split('');
  let x = 0; y = 0; 
  for (let move of moveArr) {
    if(move == "R") x++;
    if(move == "L") x--;
    if(move == "U") y++;
    if(move == "D") y--;
  }
  return x == 0 && y == 0;
};

console.log(judgeCircle("RLRLUDDU"));
//Works!
