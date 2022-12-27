let express = require('express')
let router = express.Router()

let productsAdController = require('./ProductsAdController')

router.post('/', productsAdController.create)

router.get('/', productsAdController.index)
router.get('/:product_id', productsAdController.show)

router.delete('/:product_id', productsAdController.delete)
router.put('/:product_id', productsAdController.update)

module.exports = router