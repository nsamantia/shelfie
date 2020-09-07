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
        console.log(name, price, img)

    
       
        
    
        res.status(200)


    }
    
}
console.log(this.addToInventory)
