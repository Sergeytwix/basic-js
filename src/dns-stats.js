const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  dArr = domains.map(d => d.split('.').reverse().map(e => '.' + e));
  dName = [];
  for (let i = 0; i < dArr.length; i++) {
    for (let j = 0; j < dArr[i].length; j++) {
      let dn = '';
      for (let k = 0;k <= j;k++) {
        dn = dn + dArr[i][k];
      }
      dName.push(dn);
    }
  }  
  dnObj = {};
  dName.forEach((el, i, a) => dnObj[el] = a.filter(e => e == el).length);
  return dnObj;
}

module.exports = {
  getDNSStats
};
