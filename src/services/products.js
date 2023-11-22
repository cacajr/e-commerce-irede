const { productsModel } = require('../models')

const listProducts = async () => {
    const products = await productsModel.listProducts()

    return { 
        statusCode: 200, 
        message: '', 
        value: products
    }
}

const listProductsByProperties = async (queryParams) => {
    const products = await productsModel.
                        listProductsByNameAndCategory(queryParams)

    return { 
        statusCode: 200, 
        message: '', 
        value: products
    }
}

module.exports = {
    listProducts,
    listProductsByProperties
}