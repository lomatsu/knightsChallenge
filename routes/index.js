const { Router } = require('express')
  , router = Router()

//router.route('/')

router.use('/knights', require('./knights'))

module.exports = router