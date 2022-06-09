

const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
    {
        address : {type : String , required : false},
        building : {type : String , required:true},
        location: {
        type : {type:String ,default:"Point"},
        coordinates : [{type:Number , required:true}],
        },
        street : {type : String , required :false},
    },
    {
        borough :{type : String , required :false},
        cuisine : {type : String , required :true},
        name : {type : String , required :true},
        restaurant_id : {type : String , required :true},

}

)

const restaurants = mongoose.model('restaurants',restaurantSchema)

module.exports = restaurants