var express = require('express')
var router = express.Router()
const inventory = require('../../database/inventory-model')
const Inventory = require('../../database/inventory-model')

router.get('/:adminId', async (req, res) => {
    try {
        var inventoryList = await inventory.findAll({
            where: {
                updatedByAdminId: adminId
            }
        })
        res.json(inventoryList).status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Error fetching inventory added by admin'})
    }
})

router.get('/getAllInventory', async (req, res) => {
    try {
        var inventoryList = await inventory.findAll()
        res.json(inventoryList).status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error fetching all inventory"})
    }
})

router.get('/overview', async (req, res) => {
    try{
        const newInventory = await Inventory.findAll({
            group: ['categoryId']
        });
        res.json({ message: "Inventory Item added successfully"}).status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error adding inventory"})
    }
})

router.post('/', async (req, res) => {
    try{
        const newInventory = await Inventory.create(req.body);
        res.json({ message: "Inventory Item added successfully"}).status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error adding inventory"})
    }
})


module.exports = router