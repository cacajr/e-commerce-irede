const { User } = require('../databases/models')
const { Op } = require('sequelize')

const matchUser = async (user) => {
    const { email, password } = user

    const userMatched = await User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            [Op.and]: [
                { email },
                { password }
            ]
        }
    })

    return userMatched[0]
}

const findById = async (idUser) => {
    const [user] = await User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            idUser
        }
    })

    return user
}

const findByEmail = async (email) => {
    const [user] = await User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            email
        }
    })

    return user
}

const create = async (user) => {
    const newUser = await User.create(user)

    return newUser
}

module.exports = {
    matchUser,
    findById,
    findByEmail,
    create
}