const { productsService } = require('../services')

const listProducts = async (req, res) => {
    const products = await productsService.listProducts()

    if(products.message) {
        return res.status(products.statusCode).json({
            message: products.message
        })
    }

    return res.status(products.statusCode).json(products.value)
}

const listProductsByProperties = async (req, res) => {
    const queryParams = req.query

    const products = await productsService.
                        listProductsByProperties(queryParams)

    if(products.message) {
        return res.status(products.statusCode).json({
            message: products.message
        })
    }

    return res.status(products.statusCode).json(products.value)
}

module.exports = {
    listProducts,
    listProductsByProperties
}