const mongoose = require('mongoose')
  , mongoDb = require('../lib/mongoose')
  , Schema = mongoose.Schema

  const knightSchema = new Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    birthday: { type: Date },
    weapons: [
      {
        name: { type: String },
        mod: { type: Number },
        attr: { type: String },
        equipped: { type: Boolean }
      }
    ],
    attributes: {
      strength: { type: Number },
      dexterity: { type: Number },
      constitution: { type: Number },
      intelligence: { type: Number },
      wisdom: { type: Number },
      charisma: { type: Number }
    },
    keyAttribute: { type: String }
  })

module.exports = mongoDb.model('knight', knightSchema)