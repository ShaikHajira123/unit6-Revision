
const mongoose  = require('mongoose')

const connect = ()=> {
 return  mongoose.connect('mongodb+srv://shaikHajira123:hajira1234@cluster0.vcq9f.mongodb.net/assignments?retryWrites=true&w=majority')
}
 module.exports = connect
