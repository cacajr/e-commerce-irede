const { loginService } = require('../services')

const create = async (req, res) => {
    const user = req.body

    const login = await loginService.create(user)

    if(login.message) {
        return res.status(login.statusCode).json({
            message: login.message
        })
    }

    return res.status(login.statusCode).json(login.value)
}

module.exports = {
    create
}