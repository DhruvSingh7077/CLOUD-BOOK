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
// remove this part from here
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
// REMOVE THJIS PART
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