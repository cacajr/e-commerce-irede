const pgConnection = require('../databases/pgConnection')

const listUserProductByUserId = async (idUser) => {
    const userProducts = await pgConnection.query(
        'SELECT up.id_user AS "idUser", up.id_sale AS "idSale", up.quantity, up.price, p.id_product AS "idProduct", p.picture, p.name, p.category, s.date, s.status FROM public.users_products AS up JOIN public.products AS p ON up.id_product = p.id_product JOIN public.sales AS s ON up.id_sale = s.id_sale WHERE up.id_user = $1;',
        [idUser]
    )

    return userProducts.rows
}

const create = async (userProduct) => {
    const { idUser, idProduct, idSale, quantity, price } = userProduct

    const sale = await pgConnection.query(
        'INSERT INTO public.users_products (id_user, id_product, id_sale, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
        [idUser, idProduct, idSale, quantity, price]
    )

    return sale.rows[0]
}

module.exports = {
    listUserProductByUserId,
    create
}