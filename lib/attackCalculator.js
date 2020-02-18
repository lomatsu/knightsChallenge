const attackCalculator = (knight) => {

  function mod(value) {
    if (value >= 0 && value <= 8) return -2
    if (value >= 9 && value <= 10) return -1
    if (value >= 11 && value <= 12) return 0
    if (value >= 13 && value <= 15) return 1
    if (value >= 16 && value <= 18) return 2
    if (value >= 19 && value <= 20) return 3

    throw new Error('Valor não permitido')
  }

  const keyAttr = knight.attributes[knight.keyAttribute || 'charisma']
  const equipped = knight.weapons.find(it => it.equipped)

  // console.log(keyAttr, equipped)

  const modResult = mod(keyAttr)
  const attack = 10 + modResult + equipped.mod

  console.log('Mod: ', modResult)
  console.log('Poder de ataque: ', attack)
  return attack
}

module.exports = attackCalculator
