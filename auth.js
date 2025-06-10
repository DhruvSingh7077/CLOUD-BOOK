const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// create a USER using : POST "/api/auth/createuser". no login required
router.post('/createuser',[
   body('name','enter a valid name').isLength({min :3}),
   body('email','enter a valid email').isEmail(),
   body('password','password must be atleat 5 character').isLength({min:5}),
], async(req, res)=>{
   // if there are eroors return bad request and the error
      const errors = validationResult(req);
   if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }
   // check whether the user with email exists already
try{

   let user = await User.findOne({email: req.body.email});
   if(user){
      return res.status(400).json({error: "sorry a user with this email already exists"})
   }
   // creating a new user
   user= await User.create({
      name:req.body.name, 
      password: req.body.password,
      email: req.body.email,
   })
   res.json (user)
} catch(error) {
   console.error(error.message);
   res.status(500).send("some Error occured");
}
   

    
  
})
module.exports = router

// remove this part
const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// create a USER using : POST "/api/auth/createuser". no login required
router.post('/createuser',[
   body('name','enter a valid name').isLength({min :3}),
   body('email','enter a valid email').isEmail(),
   body('password','password must be atleat 5 character').isLength({min:5}),
], async(req, res)=>{
   // if there are eroors return bad request and the error
      const errors = validationResult(req);
   if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }
   // check whether the user with email exists already
try{

   let user = await User.findOne({email: req.body.email});
   if(user){
      return res.status(400).json({error: "sorry a user with this email already exists"})
   }
   // creating a new user
   user= await User.create({
      name:req.body.name, 
      password: req.body.password,
      email: req.body.email,
   })
   res.json (user)
} catch(error) {
   console.error(error.message);
   res.status(500).send("some Error occured");
}
   

    
  
})
module.exports = router







