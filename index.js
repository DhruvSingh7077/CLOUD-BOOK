 const connectToMongo =  require('./db');
 const express = require('express')
connectToMongo(); 
const app = express()
const port = 3000
//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {               
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// REMOVE THIS PART
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('User', UserSchema);