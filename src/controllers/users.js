const { usersService } = require('../services')

const create = async (req, res) => {
    const user = req.body

    const newUser = await usersService.create(user)

    if(newUser.message) {
        return res.status(newUser.statusCode).json({
            message: newUser.message
        })
    }

    return res.status(newUser.statusCode).json(newUser.value)
}

module.exports = {
    create
}