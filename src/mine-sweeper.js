const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const sweeper = [];
  for (let i = 0; i < matrix.length; i++) {
    sweeper.push(new Array(matrix[0].length).fill(0));
  }
  let mine = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        sweeper[i][j] = 1;
      } else {
        mine = 0;
        if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
          mine++;
        }
        if (i > 0 && matrix[i - 1][j]) {
          mine++;
        }
        if (i > 0 && j < (matrix[0].length - 1) && matrix[i - 1][j + 1]) {
          mine++;
        }
        if (j < (matrix[0].length - 1) && matrix[i][j + 1]) {
          mine++;
        }
        if (i < (matrix.length - 1) && j < (matrix[0].length - 1) && matrix[i + 1][j + 1]) {
          mine++;
        }
        if (i < (matrix.length - 1) && matrix[i + 1][j]) {
          mine++;
        }
        if (i < (matrix.length - 1) && j > 0 && (matrix[i + 1][j - 1])) {
          mine++;
        }
        if (j > 0 && matrix[i][j - 1]) {
          mine++;
        }
        sweeper[i][j] = mine;
      }
    }
  }
  return sweeper;
}

module.exports = {
  minesweeper
};
