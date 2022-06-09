const express = require('express')
const Category = require('../models/category.model')

const router = express.Router()

router.post("/create" , async (req,res) => {
    try{
       const category = await Category.create(req.body)
       return res.status(200).send(category)
    }
    catch(err){
        return res.status(404).send({message:err.message})
    }
})

router.get("/" , async(req,res) => {
    try{
        const category = await Category.find().lean().exec()
        return res.status(200).send(category)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.get("/:id" , async(req,res) => {
    try{
        const category = await Category.findById(req.params.id).lean().exec()
        return res.status(200).send(category)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


router.patch("/:id/edit" , async(req,res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id , req.body, {
            new:true
        }).lean().exec()
        return res.status(200).send(category)
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
})


// router.get("/:id/subCategories" , async(req,res) => {
//     try{
//         const category = await Category.findById(req.params.id).lean().exec()
//         return res.status(200).send(category.subcat)
//      }
//      catch(err){
//          return res.status(400).send({message:err.message})
//      }
// })

// router.post("/:id/subCategories/create" , async(req,res) => {
//     try{
//         const subcats = await Category.updateOne({_id:req.params.id} , {$push: {subcat:req.body}})

//         const category = await Category.findById(req.params.id).lean().exec()
//         return res.status(200).send(category.subcat)
      
//      }
//      catch(err){
//          return res.status(400).send({message:err.message})
//      }
// })

// router.patch("/:id/subCategory/:idx/edit" , async(req,res) => {
//     try{
//         const subcats = await Category.updateOne({_id:req.params.id , "subcat._id":req.params.idx} , {$set: {"subcat.$":req.body}})
//         // return res.status(200).send(subcats)
//         const category = await Category.findById(req.params.id).lean().exec()
//         return res.status(200).send(category.subcat)
      
//      }
//      catch(err){
//          return res.status(400).send({message:err.message})
//      }
// })
module.exports = router
 