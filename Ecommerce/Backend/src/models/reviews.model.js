
const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    review : {type:String , required:true},
    productId : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "products",
       required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
     },
})

const reviews = mongoose.model('reviews',reviewsSchema)

module.exports = reviews