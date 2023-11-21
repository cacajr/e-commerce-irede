const validateName = (name) => {
    if(!name) {
        return 'Name is required!'
    }

    return ''
}

const validateEmail = (email) => {
    if(!email) {
        return 'Email is required!'
    }

    // ref: https://masteringjs.io/tutorials/fundamentals/email-regex
    const emailIsValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
    if(!emailIsValid) {
        return 'Email invalid!'
    }

    return ''
}

const validatePassword = (password) => {
    if(!password) {
        return 'Password is required!'
    }

    if(password.length < 5) {
        return 'Password invalid!'
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