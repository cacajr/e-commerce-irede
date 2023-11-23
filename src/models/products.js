const pgConnection = require('../databases/pgConnection')

const listProducts = async () => {
    const products = await pgConnection.query(
        'SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products;'
    )

    return products.rows
}

const findById = async (id) => {
    const product = await pgConnection.query(
        'SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products WHERE id_product = $1;',
        [id]
    )

    return product.rows[0]
}

const listProductsByNameAndCategory = async (queryParams) => {
    const { name = '', category = '' } = queryParams

    const products = await pgConnection.query(
        'SELECT id_product AS "idProduct", picture, name, category, CAST(price AS float) FROM public.products WHERE LOWER(name) LIKE LOWER($1) AND LOWER(category) LIKE LOWER($2);',
        [`%${name}%`, `%${category}%`]
    )

    return products.rows
}

const listProductsPurchasedByUserId = async (idUser) => {
    const products = await pgConnection.query(
        'SELECT p.id_product AS "idProduct", up.id_sale AS "idSale", p.picture, p.name, p.category, up.quantity, CAST(up.price AS float) FROM public.products AS p JOIN public.users_products AS up ON p.id_product = up.id_product JOIN public.sales AS s ON up.id_sale = s.id_sale WHERE up.id_user = $1;',
        [idUser]
    )

    return products.rows
}

module.exports = {
    listProducts,
    findById,
    listProductsByNameAndCategory,
    listProductsPurchasedByUserId
}