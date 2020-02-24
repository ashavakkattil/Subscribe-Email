const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/user');

//Add a new user
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email
    }, (error, users) => {
        if (!error) {
            res.status(201).json({
                message: 'Successfully Saved !',
                data: users
            });
        }
    })
});

//Display the list of Registered Users
router.get('/', (req,res) => {
    User.find({}, (error, users) => {
        if(error){
            res.status(500).json({
                message: error.message,
                error: error
            })
        }
        else{
            res.status(200).json({
                message: 'User details fetched successfully',
                data: users
            })
        }
    })
})

module.exports = router;
