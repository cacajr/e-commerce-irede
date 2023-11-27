const {
    Product, 
    Sale,
    UserProduct
} = require('../databases/models')

const create = async (userProduct) => {
    const sale = await UserProduct.create(userProduct)

    return sale
}

const listUserProductByUserId = async (idUser) => {
    const userProducts = await UserProduct.findAll({
        attributes: {
            exclude: ['idUser', 'idSale', 'idProduct']
        },
        where: {
            idUser
        },
        include: [
            {
                model: Product,
                as: 'product',
                attributes: {
                    exclude: ['quantity', 'price']
                }
            },
            {
                model: Sale,
                as: 'sale'
            }
        ]
    })
    
    return userProducts
}

module.exports = {
    create,
    listUserProductByUserId
}