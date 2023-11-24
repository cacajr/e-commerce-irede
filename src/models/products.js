const pgConnection = require('../databases/pgConnection')

const { Product, Sale, UserProduct } = require('../databases/models')
const { Op } = require('sequelize')

const listProducts = async () => {
    // const [products] = await sequelize.query(
    //     `SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products;`
    // )

    const products = await Product.findAll({
        attributes: {
            exclude: ['quantity']
        }
    })

    return products
}

const findById = async (id) => {
    // const [product] = await sequelize.query(
    //     `SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products WHERE id_product = ${id};`
    // )

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

    // const [products] = await sequelize.query(
    //     `SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products WHERE LOWER(name) LIKE LOWER('%${name}%') AND LOWER(category) LIKE LOWER('%${category}%');`
    // )

    // const [products] = await sequelize.query(
    //     `SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products WHERE name ILIKE '%${name}%' AND category ILIKE '%${category}%';`
    // )

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

const listProductsPurchasedByUserId = async (idUser) => {
    // const [p2] = await sequelize.query(`SELECT p.id_product AS "idProduct", up.id_sale AS "idSale", p.picture, p.name, p.category, up.quantity, CAST(up.price AS float) FROM public.products AS p JOIN public.users_products AS up ON p.id_product = up.id_product JOIN public.sales AS s ON up.id_sale = s.id_sale WHERE up.id_user = ${idUser};`)
    
    const products = await pgConnection.query(
        'SELECT p.id_product AS "idProduct", up.id_sale AS "idSale", p.picture, p.name, p.category, up.quantity, CAST(up.price AS float) FROM public.products AS p JOIN public.users_products AS up ON p.id_product = up.id_product JOIN public.sales AS s ON up.id_sale = s.id_sale WHERE up.id_user = $1;',
        [idUser]
    )

    const p2 = await UserProduct.findAll({
        include: [
            { model: Product, as: 'products' }
        ]
    })

    console.log(p2)

    return products.rows
}

module.exports = {
    listProducts,
    findById,
    listProductsByNameAndCategory,
    listProductsPurchasedByUserId
}