require('dotenv').config()
const express = require('express')
const app = express()
const SERVER_PORT = 4000
const massive = require('massive')

const {CONNECTION_STRING} = process.env

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`What up from ${SERVER_PORT}`)
})

massive({connectionString: CONNECTION_STRING, ssl:{rejectUnauthorized: false}}).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))


