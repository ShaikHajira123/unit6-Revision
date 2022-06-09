

const mongoose = require('mongoose')

const neighbourhoodSchema = new mongoose.Schema(
    {
       geometry : {
       coordinates : [[
          [Number,Number]
       ]],
    
       },
    name : {type:String , required : false}
    }
)

const neighbourhood = mongoose.model('neighbourhoods',neighbourhoodSchema)

module.exports =neighbourhood