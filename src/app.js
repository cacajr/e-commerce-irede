const express = require('express')

const { productsRoute } = require('./routes')

const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    res.status(200).json({ message: 'Server running...' })
})

app.use('/products', productsRoute)

module.exports = app