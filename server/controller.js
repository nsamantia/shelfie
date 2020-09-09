module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_all_products().then((inventory) => {
            res.status(200).send(inventory)
        })
        
    },

    addToInventory: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        

        db.create_product([name, price, img]).then((product) => {
            res.status(200).send(product)
        }).catch(err => console.log(err))

    },

    deleteProduct: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        
        db.delete_product([id]).then(() => {
            res.sendStatus(200)
        })
    }
    
}
