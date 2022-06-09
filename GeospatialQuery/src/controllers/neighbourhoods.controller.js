

const express = require('express');

const router = express.Router();

const Neighbourhoods = require('../models/neighbourhood.model')

router.post('/create', async(req,res)=>{
    try {
        const neighbourhoods = await Neighbourhoods.create(req.body);

        return res.status(201).send(neighbourhoods)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

router.get("/", async(req,res)=>{

    try {
        const neighbourhoods = await Neighbourhoods.find({
            location: {
             $nearSphere: {
                $geometry: {
                    type : "Point",
                    coordinates : [ req.body.location.coordinates[0],req.body.location.coordinates[1] ]
                  }
               }
            }
          })

          return res.status(200).send(neighbourhoods)

    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router