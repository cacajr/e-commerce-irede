const validateId = (id) => {
    if(!id && id !== 0) {
        return 'Product id is required!'
    }

    if(typeof id !== 'number') {
        return 'Product id must be a number!'
    }
    
    return ''
}

const validateQuantity = (quantity) => {
    if(!quantity) {
        return 'Product quantity is required!'
    }

    if(typeof quantity !== 'number') {
        return 'Product quantity must be a number!'
    }
    
    return ''
}

const validatePrice = (price) => {
    if(!price && price !== 0) {
        return 'Product price is required!'
    }

    if(typeof price !== 'number') {
        return 'Product price must be a number!'
    }
    
    return ''
}

const validateProductCreateSale = (product) => {
    const { idProduct, quantity, price } = product

    return validateId(idProduct) || 
            validateQuantity(quantity) || 
            validatePrice(price)
}

module.exports = {
    validateProductCreateSale
}