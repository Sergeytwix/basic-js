const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = {"Dec":"winter", "Jan":"winter", "Feb":"winter", "Mar":"spring", "Apr":"spring", "May":"spring",
                  "Jun":"summer", "Jul":"summer", "Aug":"summer", "Sep":"autumn", "Oct":"autumn", "Nov":"autumn"};
  let resseason = '';
  if (typeof(date) === "undefined") {
   resseason='Unable to determine the time of year!';
  }
  else {
    if ((!date.getMonth) || date.toString() == new Date().toString()) {
      throw new Error('Invalid date!');
  }     
    else {
      resseason = seasons[String(date).slice(4,7)];
    }
  }
  return resseason;
}

module.exports = {
  getSeason
};
