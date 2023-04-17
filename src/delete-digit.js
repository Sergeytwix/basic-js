const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const narr = [];
  const darr = String(n).split('');
  for (let i = 0; i < darr.length; i++) {
    const d = darr[i];
    darr.splice(i, 1);
    narr.push(Number(darr.join('')));
    darr.splice(i, 0, d);
  }
  return Math.max.apply(null, narr);
}

module.exports = {
  deleteDigit
};
