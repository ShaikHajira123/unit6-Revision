
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    productId : [{
       type : mongoose.Schema.Types.ObjectId,
       ref : "product",
       required : true
    }],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
     },
})

const order = mongoose.model('reviews',orderSchema)

module.exports = order