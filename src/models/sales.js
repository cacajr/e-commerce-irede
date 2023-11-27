const { Sale } = require('../databases/models')

const create = async () => {
    const sale = await Sale.create()

    return sale
}

module.exports = {
    create
}