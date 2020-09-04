
const express = require('express')
const app = express()
const SERVER_PORT = 4000

// app.get('/', (res, req) => {
//     res.send('hi')
// })

app.listen(SERVER_PORT, () => {
    console.log(`What up from ${SERVER_PORT}`)
})