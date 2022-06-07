
const express  = require('express')
const connect = require('./config/db')

const productController = require('./controllers/product.controller')
const userController = require('./controllers/user.controller')
const brandController = require('./controllers/brand.controller')

const app  = express()
app.use(express.json())

app.use("/products",productController)
app.use("/users",userController)
app.use("/brands",brandController)

app.listen(5000 , async() => {
   try{
      await connect()
      console.log('listening on port 5000')
   }
   catch(err){
       console.log({message:err.message})
   }
})

module.exports = app