const { salesService } = require('../services')

const listSalesByUserId = async (req, res) => {
    const { idUser } = req.params

    const sales = await salesService.listSalesByUserId(idUser)

    if(sales.message) {
        return res.status(sales.statusCode).json({
            message: sales.message
        })
    }

    return res.status(sales.statusCode).json(sales.value)
}

const create = async (req, res) => {
    const sale = req.body

    const newSale = await salesService.create(sale)

    if(newSale.message) {
        return res.status(newSale.statusCode).json({
            message: newSale.message
        })
    }

    return res.status(newSale.statusCode).json(newSale.value)
}

module.exports = {
    listSalesByUserId,
    create
}