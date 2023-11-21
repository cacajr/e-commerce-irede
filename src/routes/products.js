const express = require('express')

const { productsController } = require('../controllers')

const router = express.Router()

router.get('/filter', productsController.listProductsByProperties)
router.get('/', productsController.listProducts)

module.exports = router