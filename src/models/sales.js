const pgConnection = require('../databases/pgConnection')

const listSalesByUserId = async (idUser) => {
    const sales = await pgConnection.query(
        'SELECT s.id_sale AS "idSale", s.date, s.status FROM public.sales AS s JOIN public.users_products AS up ON s.id_sale = up.id_sale WHERE up.id_user = $1 GROUP BY s.id_sale;',
        [idUser]
    )

    return sales.rows
}

const create = async () => {
    const sale = await pgConnection.query(
        'INSERT INTO public.sales (date) VALUES ($1) RETURNING id_sale AS "idSale";',
        ['NOW()']
    )

    return sale.rows[0]
}

module.exports = {
    listSalesByUserId,
    create
}