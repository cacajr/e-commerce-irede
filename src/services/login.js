const { validateUserLogin } = require('./validations/userValidation')
const { usersModel } = require('../models')

const create = async (user) => {
    const errorMessage = validateUserLogin(user)
    if(errorMessage) {
        return { 
            statusCode: 400, 
            message: errorMessage, 
            value: null
        }
    }

    const userFound = await usersModel.findByEmail(user.email)
    if(!userFound) {
        return { 
            statusCode: 422, 
            message: 'User do not exists!', 
            value: null
        }
    }

    const userRegistered = await usersModel.matchUser(user)
    if(!userRegistered) {
        return { 
            statusCode: 422, 
            message: 'Email or password is wrong!', 
            value: null
        }
    }

    return { 
        statusCode: 200, 
        message: '', 
        value: userRegistered
    }
}

module.exports = {
    create
}