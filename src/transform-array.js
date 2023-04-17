const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let newArr = [];
    if (!arr == []) {
      let next = true;
      let prev = false;
      let current='';
      arr.forEach(function(item, index) {
        switch (item) {
          case '--discard-prev':
            if ((index > 0)&&(String(current)!='')) newArr.pop();
            break;
          case '--double-prev':
            if ((index > 0)&&(String(current)!='')) {newArr.push(current); next = true;}
            break;
          case '--double-next':
            if (index < arr.length) prev = true;
            break;    
          case '--discard-next':
            if (index < arr.length) {next = false; current='';}
            break;
          default:
            if (next == true) {current = item; newArr.push(item);}
            if (prev == true) {current = item; newArr.push(item);}
            next = true;
            prev = false;
            break;
        }
      });
    }
    return (newArr);
  }
}

module.exports = {
  transform
};
