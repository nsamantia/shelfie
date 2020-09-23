
let prodId = 0
module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_all_products().then((inventory) => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
        
    },

    addToInventory: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body
        

        db.create_product([name, price, imgurl]).then((product) => {
            res.status(200).send(product)
        }).catch(err => console.log(err))

    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.body
        
        
        db.delete_product([id]).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },

    editProduct: (req, res) => {
        const {id} = req.params
        const{ name, price, imgurl} = req.body
        const db = req.app.get('db')

        db.edit_product([id, name, price, imgurl]).then((product) => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    }
    
}
