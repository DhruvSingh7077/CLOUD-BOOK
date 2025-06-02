const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.get('/', (req, res)=>{
   console.log(req.body);
   const user = User(req.body);
   user.save()
   res.send(req.body);
    
   router.post('/',[
    body('name').islength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5}),
   ])
})
module.exports = router

