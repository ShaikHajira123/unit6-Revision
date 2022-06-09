const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    
    
         categoryname : {type : String,required:true},
          subcat : [{ 
             type:String , required:true 
            }],
            // ancestors :["shirts","chappals"]
        
   
    
})

const category = mongoose.model('category',categorySchema)

module.exports = category