const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// create a USER using : POST "/api/auth/". Doesn't require auth
router.post('/',[
   body('name','enter a valid name').isLength({min :3}),
   body('email','enter a valid email').isEmail(),
   body('password','password must be atleat 5 character').isLength({min:5}),
], (req, res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }
   User.create({
      name:req.body.name,
      password: req.body.password,
      email: req.body.email,
   }).then(user => res.json(user));
   

    
  
})
module.exports = router




