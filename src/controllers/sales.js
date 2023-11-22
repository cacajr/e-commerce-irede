const { salesService } = require('../services')

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
    create
}