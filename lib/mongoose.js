const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI || 'mongodb://localhost/knight'

const mongodb = mongoose.createConnection(uri, { useNewUrlParser: true })

module.exports = mongodb