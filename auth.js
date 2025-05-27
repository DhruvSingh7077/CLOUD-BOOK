const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   
    res.json([])
})
module.exports = router
 const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydb');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectToMongo;
