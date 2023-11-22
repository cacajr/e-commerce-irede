const pgConnection = require('../databases/pgConnection')

const create = async (userProduct) => {
    const { idUser, idProduct, idSale, quantity, price } = userProduct

    const sale = await pgConnection.query(
        'INSERT INTO public.users_products (id_user, id_product, id_sale, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
        [idUser, idProduct, idSale, quantity, price]
    )

    return sale.rows[0]
}

module.exports = {
    create
}