const { Product } = require('../databases/models')
const { Op } = require('sequelize')

const listProducts = async () => {
    const products = await Product.findAll({
        attributes: {
            exclude: ['quantity']
        }
    })

    return products
}

const findById = async (id) => {
    const [product] = await Product.findAll({
        attributes: {
            exclude: ['quantity']
        },
        where: {
            idProduct: id
        }
    })

    return product
}

const listProductsByNameAndCategory = async (queryParams) => {
    const { name = '', category = '' } = queryParams

    const products = await Product.findAll({
        attributes: {
            exclude: ['quantity']
        },
        where: {
            [Op.and]: [
                { name: { [Op.iLike]: `%${name}%` } },
                { category: { [Op.iLike]: `%${category}%` } }
            ]
        }
    })

    return products
}

module.exports = {
    listProducts,
    findById,
    listProductsByNameAndCategory
}