const validateUser = (user) => {
    const { name, email, password } = user

    if(!name) {
        return 'Name is required!'
    }

    if(!email) {
        return 'Email is required!'
    }

    if(!password) {
        return 'Password is required!'
    }

    // ref: https://masteringjs.io/tutorials/fundamentals/email-regex
    const emailIsValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
    if(!emailIsValid) {
        return 'Email invalid!'
    }

    if(password.length < 5) {
        return 'Password invalid!'
    }

    return ''
}

module.exports = {
    validateUser
}