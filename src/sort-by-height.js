const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newarr.push(arr[i]);
    }
  }
  newarr.sort((a, b) => a - b);
  const resarr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      resarr.push(newarr[j]);
      j++;
    } else {
      resarr.push(-1);
    }
  }
  return resarr;
}

module.exports = {
  sortByHeight
};
