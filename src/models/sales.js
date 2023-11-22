const pgConnection = require('../databases/pgConnection')

const create = async () => {
    const sale = await pgConnection.query(
        'INSERT INTO public.sales (date) VALUES ($1) RETURNING id_sale AS "idSale";',
        ['NOW()']
    )

    return sale.rows[0]
}

module.exports = {
    create
}