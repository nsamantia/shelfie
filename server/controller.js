
let prodId = 0
module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_all_products().then((inventory) => {
            res.status(200).send(inventory)
        })
        
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
        const {prodId} = req.params
        
        //use spice somehow
        db.delete_product([prodId]).then(() => {
            res.sendStatus(200)
        })
    },

    editProduct: (req, res) => {
        const {prodId} = req.params
        const{ name, price, imgurl} = req.body
        const db = req.app.get('db')

        db.edit_product([name, price, imgurl]).then((product) => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    }
    
}
