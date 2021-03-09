const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//----------------Search user Name--------------------//
router.get('/search/:first_name', async (req, res) => {

    try {
        const searchFieild = req.params.first_name;
        User.find({ first_name: { $regex: searchFieild, $options: '$i' } })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
})

//--------------------Search Role--------------------//
router.get('/searchrole/:role', async (req, res) => {
    try {
        const role = req.params.role;
        User.find({ role: role })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
})

//-------------------Search User data---------------------------//
router.get('/searchdata/:first_name', async (req, res) => {

    try {
        const searchFieild = req.params.first_name;
        User.find({ first_name: { $regex: searchFieild, $options: '$i' } })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
})

//---------------Search Role Data----------------------//
router.get('/searchroledata/:role', async (req, res) => {
    try {
        const role = req.params.role;
        User.find({ role: role })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
})

//------------All user Find------------------//
router.get('/userall', async (req, res) => {
    try {
        await User.find()
            .then(data => {
                res.send({
                    status: 400,
                    data
                })
            })
    } catch (error) {
        res.send({
            status: 404,
            error: error
        })
    }
})
module.exports = router