

const express = require('express')
const Restaurants = require('../models/restaurants.model')

const router = express.Router()

router.post("/create" , async (req,res) => {
    try{

       const restaurants = await Restaurants.create(req.body)
       return res.status(200).send(restaurants)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("/" , async(req,res) => {
    try{
        const restaurants = await Restaurants.
        find({ location :{$near : [req.body.location.coordinates[0], req.body.location.coordinates[1]]}})
        .lean().exec()
        // console.log(req.body.location.coord[0])
        return res.status(200).send(restaurants)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})



module.exports = router