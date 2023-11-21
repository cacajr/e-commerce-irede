const pgConnection = require('../databases/pgConnection')

const listProducts = async () => {
    const products = await pgConnection.query(
        'SELECT * FROM public.products;'
    )

    return products.rows
}

const listProductsByNameAndCategory = async (name, category) => {
    console.log(typeof name, typeof category)
    console.log(name, category)

    const products = await pgConnection.query(
        'SELECT * FROM public.products WHERE LOWER(name) LIKE LOWER($1) AND LOWER(category) LIKE LOWER($2);',
        [`%${name}%`, `%${category}%`]
    )

    return products.rows
}

module.exports = {
    listProducts,
    listProductsByNameAndCategory
}