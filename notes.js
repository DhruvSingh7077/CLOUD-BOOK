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

