const validateName = (name) => {
    if(!name) {
        return 'User name is required!'
    }

    if(typeof name !== 'string') {
        return 'User name must be a string!'
    }

    return ''
}

const validateEmail = (email) => {
    if(!email) {
        return 'User email is required!'
    }

    if(typeof email !== 'string') {
        return 'User email must be a string!'
    }

    // ref: https://masteringjs.io/tutorials/fundamentals/email-regex
    const emailIsValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
    if(!emailIsValid) {
        return 'User email invalid!'
    }

    return ''
}

const validatePassword = (password) => {
    if(!password) {
        return 'User password is required!'
    }

    if(typeof password !== 'string') {
        return 'User password must be a string!'
    }

    if(password.length < 5) {
        return 'User password must have at least 5 characters!'
    }

    return ''
}

const validateUser = (user) => {
    const { name, email, password } = user

    return validateName(name) || 
            validateEmail(email) || 
            validatePassword(password)
}

const validateUserLogin = (user) => {
    const { email, password } = user

    return validateEmail(email) || 
            validatePassword(password)
}

module.exports = {
    validateUser,
    validateUserLogin
}