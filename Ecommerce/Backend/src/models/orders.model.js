
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    productId : [{
       type : mongoose.Schema.Types.ObjectId,
       ref : "products",
       required : true
    }],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
     },
})

const order = mongoose.model('reviews',orderSchema)

module.exports = order