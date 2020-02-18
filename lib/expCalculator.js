const expCalculator = (age) => {
  // console.log('Age: ', age)
  if (age <= 7) {
    exp = 0
    // console.log('Exp: ', exp)
    return exp
  }
  exp = Math.floor((age - 7) * Math.pow(22, 1.45))
  // console.log('Exp: ', exp)
  return exp
}

module.exports = expCalculator