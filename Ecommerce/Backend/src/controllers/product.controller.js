const express = require('express')
const Product = require('../models/product.model')

const router = express.Router()

router.post("/create" , async (req,res,next) => {
    try{

       const product = await Product.create(req.body)
       return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("/" , async(req,res) => {
    const page = req.query.page || 1;
    const pagesize  = req.query.pagesize || 5;
    const skip = (page-1) * pagesize
    let sort = req.query.sort || 1
    const color = req.query.color
    const brandName = req.query.brandName
    try{
        
        let filter = {}

        if(sort == 1){
            sort = {price :1}
        }
        else{
            sort = {price :-1}
        }

        if(color){
            filter.color = {$in : color}
        }
        if(brandName){
            filter.brandName={$in : brandName}
        }
        
        const product = await Product.find(filter)
        .skip(skip)
        .limit(pagesize)
        .sort(sort)
        .populate({
            
        })
        .lean()
        .exec()

        const totalPages = Math.ceil(
            (await Product.find(filter).countDocuments()) / pagesize
          );
      
        return res.status(200).send({product , totalPages})
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.get("/:id" , async(req,res) => {
    try{
        const product = await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.patch("/:id/edit" , async(req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id , req.body, {
            new:true
        }).lean().exec()
        return res.status(200).send(product)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})

module.exports = router