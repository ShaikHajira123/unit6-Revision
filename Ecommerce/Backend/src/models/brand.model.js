

const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    brandName : {type:String , required :true},
    productId : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      }]
    
})

const brands = mongoose.model('brands',brandSchema)

module.exports = brands