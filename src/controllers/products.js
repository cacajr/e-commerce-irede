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
    const { name = '', category = '' } = req.query

    const products = await productsService.
                        listProductsByProperties(
                            name, 
                            category
                        )

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