

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type:String , required :true},
    gender : {type:String , required:true},
    email : { type : String , required:true},
    password : {type:String , required:true},
    address : [{
        houseNo : { type:String , required:true },
        street : { type:String , required:true },
        landmark : { type:String , required:true },
        city : { type:String , required:true },
        pincode : { type:String , required:true },
        country : { type:String , required:true }
    }]
  
})

const user = mongoose.model('users',userSchema)

module.exports = user