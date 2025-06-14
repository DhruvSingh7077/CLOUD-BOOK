const express = require('express');
const router = express.Router();
//const User = require('../models/User');
 var fetchuser = require('../middleware/fetchuser');  
//  Route 1:Get All the Notes using: GET '/api/auth/getuser".  login required
router.get('/fetchallnotes',fetchuser, (req, res)=>{
 
  res.json("hello");
})
module.exports = router;    

    

   



