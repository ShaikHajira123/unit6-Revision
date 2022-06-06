
const express  = require('express')
const connect = require('./config/db')
const app  = express()
app.use(express.json())

app.listen(5000 , async() => {
   try{
      await connect()
      console.log('listening on port 5000')
   }
   catch(err){
       console.log({message:err.message})
   }
})