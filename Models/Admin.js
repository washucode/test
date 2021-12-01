const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var fs = require("fs")
var  multer = require("multer")


const Admin = new Schema({
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required:true
    // default: Date.now
  },
  username:{
    type: String
  },
  profilepic:{
      type:String,
      default:"",
  },
  regDate:{
    type:Date,
    default:new Date()
  }

});





Admin.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", Admin);

