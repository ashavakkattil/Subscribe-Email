const express = require('express')
const router = express.Router()
const Package = require('../models/package')

router.get('/', (req, res) => {
    Package.find({}, (error, packages) => {
        if (!error) {
            res.json({
                data: packages,
                message: 'Successfully fetched the packages'
            })
        }
    })
})
router.get('/:id', (req, res) => {
    Package.findById(req.params.id, (error, tpackage) => {
        if (!error) {
            res.json({
                data: tpackage,
                message: 'Successfully fetched the package'
            })
        }
    })
})

router.post('/', (req,res) => {
    Package.create(req.body, (error, tpackage) => {
        if (!error) {
            res.json({
                data: tpackage,
                message: 'Successfully created a package'
            })
        }
    })
})

router.delete('/:id', (req,res) => {
    Package.deleteOne({_id: req.params.id}, (error, tpackage) =>{
        if (!error) {
            res.json({
                data: tpackage,
                message: 'Successfully deleted a package'
            })
        }
    })
})
module.exports = router