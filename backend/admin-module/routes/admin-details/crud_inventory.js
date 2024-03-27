var express = require('express')
var router = express.Router()
const inventory = require('../../database/inventory-model')

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