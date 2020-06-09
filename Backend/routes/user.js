const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/user');

//Add a new user
router.post('/', (req, res) => {
    User.findOne({ email: req.body.email }, (error, result) => {
        if (error) {
            res.json({
                status: "error",
                message: error.message
            });
        }
        else {
            if (result) {
                res.json({
                    status: "error",
                    message: "Email id Already exists",
                    data: null
                });
            }
            else {
                User.create({
                    name: req.body.name,
                    email: req.body.email
                }, (error, user) => {
                    if (!error) {
                        res.status(201).json({
                            message: 'Successfully registered',
                            data: user
                        })
                    }
                    else{
                        res.json({
                            message: error.message
                        })
                    }
                });

            }
        }
    });

});

//Display the list of Registered Users
router.get('/', (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500).json({
                message: error.message,
                error: error
            })
        }
        else {
            res.status(200).json({
                message: 'User details fetched successfully',
                data: users
            })
        }
    })
})

//Delete User by ID

router.delete('/:id', (req,res) => {
    User.deleteOne({_id: req.params.id}, (error,data) => {
        if(!error){
            res.json({
                message: 'Successfully Deleted',
                data: data
            })
        }
        else{
            res.status(500).json({
                message: error.message
            })
        }
    })
})

module.exports = router;
