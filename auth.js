const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 var JWT_SECRET = 'qwetyuiop';
 var fetchuser = require('../middleware/fetchuser');

//  ROUTE 1: create a USER using : POST "/api/auth/createuser". no login required
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
   const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash( req.body.password, salt)
   // creating a new user
   user= await User.create({
      name:req.body.name, 
      password: secPass,
      email: req.body.email,
   });
   const data = {
      user:{
         id:user.id
      }
   }
    
   const authtoken = jwt.sign(data, JWT_SECRET);
   
   //res.json (user)
   res.json({authtoken})
} catch(error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
}
   
})
// ROUTE 2: Authentication of a User using: POST "/api/auth/login". no login required"
router.post('/login',[
   body('email','enter a valid email').isEmail(),
   body('password','password cannot be blank').exists(),
], async(req, res)=>{
  
   // if there are errors return bad request and the error
   const errors = validationResult(req);
   if (!errors.isEmpty()){
      return res.status(400).json({ errors:errors.array()});
   }
   const {email, password} = req.body;
   try{
  let user =  await User.findOne({email});
  if(!user){
   return res.status(400).json({error: "please try to login with correct credentials"});
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if(!passwordCompare){
   return res.status(400).json({error: "please try to login with correct credentials"});
  }

  const data = {
      user:{
         id: user.id
      }
   } 
 const authtoken = jwt.sign(data, JWT_SECRET);
   
   
   res.json({authtoken})

   }catch(error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
}

   });
   // ROUTE 3: GET loggedin User Details using : POST "/api/auth/getuser". login required
   router.post('/getuser', fetchuser, async(req, res)=>{
   try {
      const userId = "req.user.id";
      const user = await User.findById(userId).select("-password")
       res.send(user)
   }catch(error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
   }
   })

module.exports = router




