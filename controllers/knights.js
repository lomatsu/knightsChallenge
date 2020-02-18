const model = require('../models/knight')
const exp = require('../lib/expCalculator')
const ageCalculator = require('../lib/ageCalculator')
const attackCalculator = require('../lib/attackCalculator')

module.exports = {

  async list(req, res, next) {
    try {
      const knights = await model.find()
      return res.status(200).json(knights)
    }
    catch (err) {
      return res.status(500).json({ message: err.message })
    }
  },

  async listOne(req, res, next) {
    try {
      const { id } = req.params
      const knight = await model.findOne({ _id: id })
      const age = ageCalculator(knight.birthday)

      return res.status(200).json({
        Name: knight.name,
        Age: age,
        Weapons: knight.weapons.length,
        Attribute: knight.keyAttribute,
        Attack: attackCalculator(knight),
        Exp: exp(age)
      })
    }
    catch (err) {
      return res.status(500).json({ message: err.message })
    }
  },

  async create(req, res, next) {
    try {
      const knight = req.body
      const date = new Date(knight.birthday)
      // knight.birthday = date
      const newKnight = await model.create(knight)
      console.log(newKnight.birthday)
      return res.status(201).json(newKnight)
    }
    catch (err) {
      console.log(req.body.we)
      return res.status(500).json({ message: err.message })
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params
      const knight = await model.updateOne({ _id: id }, req.body)
      console.log('id: ', id)
      console.log('req.body: ', req.body)
      console.log('knight', knight)
      res.send(knight)
    }
    catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar knight' })
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.body
      const knight = await model.deleteOne({ _id: id })
      return res.status(200).json({ message: 'Knight com o id ' + id + ' foi deletado!' })
    }
    catch (err) {
      return res.status(500).json({ error: 'Erro ao deletar knight' })
    }
  }
}