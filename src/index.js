const app = require('./app')

const SERVER_PORT = process.env.SERVER_PORT

app.listen(SERVER_PORT, () => {
    console.log(
        `Server is running in port ${SERVER_PORT}...`
    )
})