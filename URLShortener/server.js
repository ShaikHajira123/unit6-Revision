

const express = require('express')

const mongoose = require('mongoose')

const shorturl = require('./models/shorturl')
const app=express()

 mongoose.connect('mongodb+srv://ShaikHajira1234:hajira1234@urlshortner.jv5r3.mongodb.net/?retryWrites=true&w=majority' , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

app.get('/',async(req,res)=>{
    const shorturls = await shorturl.find()
    res.render('index',{shorturls:shorturls})
})

app.post('/url',async(req,res)=>{
    await shorturl.create({full:req.body.url})
    res.redirect('/')
})

app.get('/:shortid',async(req,res)=>{
    const Shorturl = await shorturl.findOne({short:req.params.shortid})
    if(Shorturl == null)
    return res.sendStatus(404)

    Shorturl.clicks++
    Shorturl.save()
    res.redirect(Shorturl.full)
})

// app.listen(8000 , async()=>{
//     try{
//     await connect()
//     console.log('listening...')
//     }
//     catch(err){
//         console.log(err)
//     }
// })

 app.listen(process.env.PORT||5000)
