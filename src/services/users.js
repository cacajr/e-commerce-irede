const { validateUser } = require('./validations/userValidation')
const { usersModel } = require('../models')

const create = async (user) => {
    const errorMessage = validateUser(user)
    if(errorMessage) {
        return { 
            statusCode: 400, 
            message: errorMessage, 
            value: null
        }
    }

    const userRegistered = await usersModel.findByEmail(user.email)
    if(userRegistered) {
        return { 
            statusCode: 422, 
            message: 'User already exists!', 
            value: null
        }
    }

    const newUser = await usersModel.create(user)
    return { 
        statusCode: 201, 
        message: '', 
        value: newUser
    }
}

module.exports = {
    create
}