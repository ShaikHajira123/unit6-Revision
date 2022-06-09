
const express  = require('express')
const connect = require('./config/db')
const cors = require('cors')

const productController = require('./controllers/product.controller')
const userController = require('./controllers/user.controller')
const brandController = require('./controllers/brand.controller')
const categoryController = require('./controllers/category.controller')
const reviewsController = require('./controllers/reviews.controller')

const app  = express()
app.use(express.json())
app.use(cors())

app.use("/products",productController)
app.use("/users",userController)
app.use("/brands",brandController)
app.use("/category",categoryController)
app.use("/reviews", reviewsController)

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