const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required:true
  },
  userEmail:{
    type:String,
    required:true
  }
});

const UserModel=mongoose.model('UserModel', userSchema);
module.exports={UserModel}