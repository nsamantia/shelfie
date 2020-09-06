module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_all_products().then((inventory) => {
            res.status(200).send(inventory)
        })
        
    }
}