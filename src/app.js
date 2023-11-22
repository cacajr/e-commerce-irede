const express = require('express')

const { 
    loginRoute,
    usersRoute, 
    productsRoute, 
    salesRoute
} = require('./routes')

const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    res.status(200).json({ message: 'Server running...' })
})

app.use('/login', loginRoute)
app.use('/users', usersRoute)
app.use('/products', productsRoute)
app.use('/sales', salesRoute)

module.exports = app