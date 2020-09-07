require('dotenv').config()

const express = require('express')
const massive = require('massive')
const invCtrl = require('./controller')
const app = express()

const SERVER_PORT = 4000

const CONNECTION_STRING = 'postgres://tiliwwgdxxfuxm:d4d8c19ad56abf6d7f4cee18eabc9ead9e1c2f4cc0c7331707aac01d88ed094d@ec2-34-238-26-109.compute-1.amazonaws.com:5432/dai3nmn7dm87qv'

app.use(express.json())





app.get('/api/inventory',  invCtrl.getInventory)

app.post('/api/product', invCtrl.addToInventory)

massive({connectionString: CONNECTION_STRING, ssl:{rejectUnauthorized: false},})
.then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB ready')
    app.listen(SERVER_PORT, () => {
        console.log(`What up from ${SERVER_PORT}`)
    })
    
}).catch(err => console.log(err))




