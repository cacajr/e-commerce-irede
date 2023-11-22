const { validateSale } = require('./validations/saleValidation')
const { 
    salesModel, 
    usersModel,
    productsModel,
    usersProductsModel 
} = require('../models')

const create = async (sale) => {
    const errorMessage = validateSale(sale)
    if(errorMessage) {
        return { 
            statusCode: 400, 
            message: errorMessage, 
            value: null
        }
    }

    const userRegistered = await usersModel.findById(sale.idUser)
    if(!userRegistered) {
        return { 
            statusCode: 422, 
            message: 'User do not exists!', 
            value: null
        }
    }

    const productsRegisteredPromises = sale.products.map((product) => {
        return productsModel.findById(product.idProduct)
    })
    const productsRegistered = await Promise.all(productsRegisteredPromises)
    if(productsRegistered.some((product) => typeof product === 'undefined')) {
        return { 
            statusCode: 422, 
            message: 'Some product do not exists!', 
            value: null
        }
    }

    // * TODO: this must be a transaction
    // const { idSale } = await salesModel.create(sale)

    const newUsersProductsPromises = sale.products.map((product) => {
        const userProduct = {
            idUser: sale.idUser,
            idProduct: product.idProduct,
            idSale: 1,//idSale,
            quantity: product.quantity,
            price: product.price
        }
        console.log(userProduct.price)
        // return usersProductsModel.create(userProduct)
    })
    // await Promise.all(newUsersProductsPromises)
    // * ------------------------------------------------------

    return { 
        statusCode: 201, 
        message: '', 
        value: sale
    }
}

module.exports = {
    create
}