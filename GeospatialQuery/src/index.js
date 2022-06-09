

// const {MongoClient} = require ('mongodb')
// const express  = require('express')
// const cors = require('cors')


// const app = express()
// app.use(cors())
// app.use(express.json())

// const client = new MongoClient(
//     'mongodb+srv://geospatialquery:123ABcd@urlshortner.jv5r3.mongodb.net/sample_restaurants?retryWrites=true&w=majority',
//      {
//         useUnifiedTopology:true,
        
//      }
// )
// var collection
// app.post('/search' ,async (req , res) => {
//     try{
//       let result = await collection.aggregate([
//           {
//          "$search" : {
//              "index" : 'default',
//              "compound" : {
//                  "must" : [
//                      {
//                          "autocomplete" : {
//                              'query' : `${req.body.query}`,
//                              'path' : 'name'
//                          }
//                      },
      
//                      {
//                          "geoWithin":{
//                              'circle' : {
//                                  'center':{
//                                      'type' : 'Point',
//                                      'coordinates':[req.body.position.lng,req.body.position.lat]
//                                  },
//                                  'radius':10000
//                              },
//                              'path':'address.location'
//                         }
//                      }
//                  ]
//              }
//             }
//          }
//       ])
//     }
//     catch(err){
//         res.status(500).send({message:err.message})
//     }
// })
// app.listen(5000 , async()=>{
//     try{
//       await client.connect()
//       collection = client.db('sample_restaurants').collection('restaurants')
//       console.log('hi')
//     }
//     catch(err){
//         console.error(err)
//     }
// })


const express  = require('express')
const connect = require('./config/db')


const restaurantsController = require('./controllers/restaurants.controller')
 const neighbourController = require("./controllers/neighbourhoods.controller")


const app  = express()
app.use(express.json())


app.use("/restaurants",restaurantsController)
 app.use("/neighbours",neighbourController)


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
