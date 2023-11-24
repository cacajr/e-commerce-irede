const { 
    validateProductCreateSale 
} = require('./productValidation')

const validateUserId = (id) => {
    if(!id && id !== 0) {
        return 'User id is required!'
    }

    if(typeof id !== 'number') {
        return 'User id must be a number!'
    }
    
    return ''
}

const validateProducts = (products) => {
    if(!products) {
        return 'Products is required!'
    }

    if(products.length < 1) {
        return 'Products list is empty!'
    }

    if(!Array.isArray(products)) {
        return 'Products must be an array!'
    }
    
    const resultsValidateProducts = products.map((product) => {
        return validateProductCreateSale(product)
    })

    const errorMessage = resultsValidateProducts.find((validate) => {
        return validate !== ''
    })

    return errorMessage || ''
}

const validateSale = (sale) => {
    const { idUser, products } = sale

    return validateUserId(idUser) ||
            validateProducts(products)
}

module.exports = {
    validateSale
}