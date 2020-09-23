require('dotenv').config()

const express = require('express')
const massive = require('massive')
const invCtrl = require('./controller')
const app = express()



app.use(express.json())
const{CONNECTION_STRING, SERVER_PORT} = process.env





app.get('/api/inventory',  invCtrl.getInventory)

app.post('/api/product', invCtrl.addToInventory)

app.put('/api/inventory/:id', invCtrl.editProduct)

app.delete('/api/product/:id', invCtrl.deleteProduct)



massive({
    connectionString: CONNECTION_STRING,
     ssl:{rejectUnauthorized: false},
    })
.then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB ready')
    app.listen(SERVER_PORT, () => {
        console.log(`What up from ${SERVER_PORT}`)
    })
    
}).catch(err => console.log(err))




