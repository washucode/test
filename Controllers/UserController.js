var User = require("../Models/Admin");
var bCrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
// var mypass = require('')
const bodyParser= require('body-parser');
const { Passport } = require("passport");
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;


exports.createNewUser = (req, res) => {
    var opt = {
      email:req.body.email,
      username:req.body.username,
      profilepic: `/posts/${image.filename}`,
      password:"admin@2030Bitlipa"
    }
    // let newLogin = new User(opt);

    console.log(opt);
    // newLogin.save((err, user) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   }
    //   res.status(201).json(user);
    //   console.log(user)
    // });
  };


exports.loginUser =
  passport.authenticate('login',{ 
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true 
  })
  // (req, res) =>{  
  //   res.redirect('/admin');
  // };
  


exports.updateAdmin = (req,res)=>{
  let id = req.params.id;
  var image = req.file
  console.log(image)

  var opt = {
    email:req.body.email,
    username:req.body.username,
    profilepic: `/posts/${image.filename}`
  }
    
  User.findOneAndUpdate({_id:id},opt,{new:true},(err,user)=>{
    if(err){
      // res.status(500).send(err);
      console.log(err)
    }
    res.status(200).json(user);
    // console.log(json(user))
  
  });
};


module.exports.getAll = (req,res)=>{
  User.find({}, (err, user) => {
  if (err) {
    res.status(500).send(err);
  }
  res.status(200).json(user);
  console.log(user)

  
  });
};




// exports.doLogin= (req,res)=>{
//   passport.authenticate('local')(req,res, function(){
//     res.redirect('/admin')
//   })
// }

exports.logout=function(req,res){
  req.logout();
  res.redirect('/login');
}









