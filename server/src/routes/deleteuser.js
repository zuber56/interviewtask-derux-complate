const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//--------------delete user only one------------->
router.delete('/userdelete/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router