const express = require('express')
const User = require('../models/user.model')

const router = express.Router()

router.post("/create" , async (req,res,next) => {
    try{
       const users = await User.create(req.body)
       return res.status(200).send(users)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("/" , async(req,res) => {
    try{
        const users = await User.find().lean().exec()
        return res.status(200).send(users)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.get("/:id" , async(req,res) => {
    try{
        const users = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(users)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.patch("/:id/edit" , async(req,res) => {
    try{
        const users = await User.findByIdAndUpdate(req.params.id , req.body, {
            new:true
        }).lean().exec()
        return res.status(200).send(users)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})



router.get("/:id/addresses" , async(req,res) => {
    try{
        const users = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(users.address)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})

module.exports = router