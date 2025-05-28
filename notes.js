const express = require('express');
const router = express.Router();
const User = require('../models/User');
// create  a user using: Post '/api/auth". dosent require Auth
router.post('/', (req, res)=>{
  console.log(req.body);
  const user =User(req.body); 
  user.save()
  res.send("hello");
})
module.exports = router;    
// you have to remove this part 
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