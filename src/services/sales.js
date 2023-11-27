const { validateSale } = require('./validations/saleValidation')
const { 
    salesModel, 
    usersModel,
    productsModel,
    usersProductsModel 
} = require('../models')

const listSalesByUserId = async (idUser) => {
    const idUserInt = parseInt(idUser)
    if(!idUserInt && idUserInt !== 0) {
        return { 
            statusCode: 400, 
            message: 'User id param must be a number!', 
            value: null
        } 
    }

    const userRegistered = await usersModel.findById(idUserInt)
    if(!userRegistered) {
        return { 
            statusCode: 422, 
            message: 'User do not exists!', 
            value: null
        }
    }

    const userProductsInfo = await usersProductsModel.listUserProductByUserId(idUser)
    
    const uniqueSales = [
        ...new Map(userProductsInfo.map(
            userProduct => [userProduct.idSale, userProduct]
        )).values()
    ]
    const sales = uniqueSales.map((sale) => {
        const userProductsBySaleId = userProductsInfo.filter(
            (userProduct) => userProduct.idSale === sale.idSale
        )
        const productsInfo = userProductsBySaleId.map(
            (userProduct) => {
                return {
                    idProduct: userProduct.idProduct,
                    picture: userProduct.picture,
                    name: userProduct.name,
                    category: userProduct.category,
                    quantity: userProduct.quantity,
                    price: userProduct.price
                }
            }
        )
        return {
            idSale: sale.idSale,
            date: sale.date,
            status: sale.status,
            products: productsInfo
        }
    })
    return { 
        statusCode: 200, 
        message: '', 
        value: sales
    }
}

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
    // TODO: to verify if the products prices is equal to products price in database
    const productsRegistered = await Promise.all(productsRegisteredPromises)
    if(productsRegistered.some((product) => typeof product === 'undefined')) {
        return { 
            statusCode: 422, 
            message: 'Some product do not exists!', 
            value: null
        }
    }

    // TODO: to decrement the product quantity in database

    // * TODO: this must be a transaction
    const { idSale } = await salesModel.create(sale)

    const newUsersProductsPromises = sale.products.map((product) => {
        const userProduct = {
            idUser: sale.idUser,
            idProduct: product.idProduct,
            idSale: idSale,
            quantity: product.quantity,
            price: product.price
        }
        return usersProductsModel.create(userProduct)
    })
    await Promise.all(newUsersProductsPromises)
    // * ------------------------------------------------------

    return { 
        statusCode: 201, 
        message: '', 
        value: sale
    }
}

module.exports = {
    listSalesByUserId,
    create
}