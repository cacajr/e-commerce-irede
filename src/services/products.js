const { productsModel } = require('../models')

const listProducts = async () => {
    const products = await productsModel.listProducts()

    return { 
        statusCode: 200, 
        message: '', 
        value: products
    }
}

const listProductsByProperties = async (name, category) => {
    const products = await productsModel.
                        listProductsByNameAndCategory(
                            name, 
                            category
                        )

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