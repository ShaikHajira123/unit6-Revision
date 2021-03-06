
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imgUrl : {type:String , required :true},
    name : {type:String , required:true},
    price : { type : Number , required:true},
    color : {type:String , required:true},
    brandName : {type: String ,required : true},
    categoryId : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "category",
       required : true
    }
})

const product = mongoose.model('products',productSchema)

module.exports = product