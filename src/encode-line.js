const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encline = '';
  const encodeArr = [];
  if (str !== '') {
    let counter = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        counter++;
      } else {
        if (counter > 1) {
          encodeArr.push(String(counter));
        }
        encodeArr.push(str[i - 1]);
        counter = 1;
      }
    }
    if (counter > 1) {
      encodeArr.push(String(counter));
    }
    encodeArr.push(str[str.length - 1]);
    encline = encodeArr.join('');
  }
  return encline;
}

module.exports = {
  encodeLine
};
