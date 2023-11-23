const express = require('express')

const { salesController } = require('../controllers')

const router = express.Router()

router.get('/:idUser', salesController.listSalesByUserId)
router.post('/', salesController.create)

module.exports = router