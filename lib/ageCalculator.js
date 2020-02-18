const moment = require('moment')

const ageCalculator = (birthday) => {
const birth = moment(birthday, 'YYYYMMDD')
, currentDate = moment()
, age = currentDate.diff(birth, 'years')
// , years = currentDate.diff(birth, 'years')
// , months = (12 - currentDate.diff(birth, 'months'))
// , days = currentDate.diff(birth, 'days')
// console.log('idade: ' + years + ' ano, ' + months + ' meses e ' + days + ' dias')

return age
}

ageCalculator(1719)
module.exports = ageCalculator