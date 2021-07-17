const express = require("express")
const userRouter = express.Router()
const User = require('../model/user.js')


    userRouter.get("/:userId", (req, res, next) => {
        User.find(
            {_id: req.params.userId},
            (err) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                console.log(user.username)
                return res.status(200).send(user)
            })
    })

   
    module.exports = userRouter
