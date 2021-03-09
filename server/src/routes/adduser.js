const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//------------------DATA INSERT----------------------//
router.post('/adduser', async (req, res) => {
    console.log("data successfully")
    try {
        const { first_name, last_name, email, role } = req.body;
        if (!first_name || !last_name || !email || !role) {
            return res.status(422).json({
                error: "please add all field",
            });
        }
        await User.findOne({ email: email })
            .then((data) => {
                if (data) {
                    return res.status(401).json({
                        error: "email address is alerady used",
                    });
                }
                else {
                    const user = new User({
                        first_name,
                        last_name,
                        email,
                        role,
                    });
                    user
                        .save()
                        .then((data) => {
                            return res.status(200).json({
                                message: "user add successfuly",
                                data,
                            });
                        })
                        .catch((error) => {
                            console.log("error:", error);
                        });
                }
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }
    catch (error) {
        return res.status(401).json({
            error: "somethinmg went wrong",
        });
    }
})
module.exports = router