const { validateUser } = require('./validations/userValidation')
const { usersModel } = require('../models')

const create = async (newUser) => {
    const errorMessage = validateUser(newUser)

    if(errorMessage) {
        return { 
            statusCode: 400, 
            message: errorMessage, 
            value: null
        }
    }

    const user = await usersModel.findByEmail(newUser.email)
    if(!user) {
        return { 
            statusCode: 422, 
            message: 'User already exists!', 
            value: null
        }
    }

    const products = await usersModel.create(user)
    return { 
        statusCode: 201, 
        message: '', 
        value: products
    }
}

module.exports = {
    create
}