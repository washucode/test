const { request } = require('express');
var express = require('express');
var router = express.Router();
// var mypass = require('')




var isAuthenticated = function (req, res, next) {
	
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}


module.exports= function(passport){
    var PostController = require('../Controllers/PostController')
    // var mypassport=require('../passport/login')
    // mypassport(passport)
  
  
    router
        .post("/post/create", PostController.createNewPost)
        
      
       
    
      
  
  
    return router;
  
  }