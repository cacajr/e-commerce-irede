const express = require('express')

const { usersRoute, productsRoute } = require('./routes')

const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    res.status(200).json({ message: 'Server running...' })
})

app.use('/users', usersRoute)
app.use('/products', productsRoute)

module.exports = app