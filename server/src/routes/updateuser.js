const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const mongoose = require("mongoose");

//----------Update User Only One------------------//
router.patch('/updateuser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { first_name, last_name, email, role } = req.body;
        if (!first_name || !last_name || !email || !role) {
            return res.status(401).json({
                error: "please add all ddddsssfield",
            });
        }
        const updatedata = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            role: role,
        };
        User.findByIdAndUpdate(id, { $set: updatedata })
            .then((data) => {
                return res.status(200).json({
                    message: "data updated successfuly",
                    data
                });
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(400).json({
            erorr: "something went wrong",
        });
    }
})
module.exports = router
