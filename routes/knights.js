const { Router } = require('express')
  , router = Router()
  , controller = require('../controllers/knights')

router.route('/')
  .get(controller.list)
  .post(controller.create)

router.route('/:id')
  .get(controller.listOne)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router