const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const rstr=String(str);

  let raddition = '';
  if (typeof(options.addition) !== "undefined") {
    raddition = String(options.addition);
  }

  let rseparator = '+';
  if (typeof(options.separator) !== "undefined") {
    rseparator = options.separator;
  }

  let radditionSeparator = '|';
  if (typeof(options.additionSeparator) !== "undefined") {
    radditionSeparator = options.additionSeparator;
  }

  let rrepeatTimes = 0;
  if (typeof(options.repeatTimes) !== "undefined") {
    rrepeatTimes=options.repeatTimes;
  }

  let radditionRepeatTimes = 0;
  if (typeof(options.additionRepeatTimes) !== "undefined") {
    radditionRepeatTimes = options.additionRepeatTimes;
  }

  let resaddstr = '';
  if (radditionRepeatTimes > 0) {
    for (let i = 1; i <= radditionRepeatTimes; i++) {
      if (i == radditionRepeatTimes) {
        resaddstr = resaddstr + raddition;
      }
      else resaddstr = resaddstr + raddition + radditionSeparator;
    }
  }
  else resaddstr = raddition;
  
  let resstr = '';
  if (rrepeatTimes > 0) {
    for (let i = 1; i <= rrepeatTimes;i++) {
      if (i == rrepeatTimes) {
        resstr = resstr + rstr + resaddstr;
      }
      else resstr = resstr + rstr + resaddstr + rseparator;
    }
  }
  else resstr = rstr + resaddstr;

  return resstr;
}

module.exports = {
  repeater
};
