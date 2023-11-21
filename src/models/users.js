const pgConnection = require('../databases/pgConnection')

const matchUser = async (user) => {
    const { email, password } = user

    const userMatched = await pgConnection.query(
        'SELECT id_user, name, email FROM public.users WHERE email = $1 AND password = $2;',
        [email, password]
    )

    return userMatched.rows[0]
}

const findByEmail = async (email) => {
    const user = await pgConnection.query(
        'SELECT id_user, name, email FROM public.users WHERE email = $1;',
        [email]
    )

    return user.rows[0]
}

const create = async (user) => {
    const { email, name, password } = user

    const products = await pgConnection.query(
        'INSERT INTO public.users (name, email, password) VALUES ($1, $2, $3) RETURNING id_user, name, email',
        [name, email, password]
    )

    return products.rows[0]
}

module.exports = {
    matchUser,
    findByEmail,
    create
}