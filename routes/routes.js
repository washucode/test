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
  var UserController = require("../Controllers/UserController")
  var mypassport=require('../passport/login')
  mypassport(passport)
  var multer = require('multer')
  const upload = multer({ dest: './assets/posts/'})

  router
    .post("/post/create",upload.single('prevImage'),PostController.createNewPost
  
    )
    .post("/updateadmin/:id",upload.single('profilepic'),UserController.updateAdmin)
  
    .get("/login",(req,res)=>{
      res.render('Blog/login',{message:req.flash('message')})
    })
    .get("/profile/:id",isAuthenticated,(req,res)=>{
      res.render('Blog/profile',{user: req.user})
    })
    .get('/write',isAuthenticated,(req,res)=>{
      res.render('Blog/write',{user: req.user})
    })
    .get("/logout",UserController.logout)
    .get("/getAdmins",UserController.getAll)
    .post('/loggin', UserController.loginUser)
    .get('/admin',isAuthenticated,(req,res)=>{
    
      res.render('Blog/adminhome',{user: req.user});
      // res.send(req.user)
    })
    
        
     
  
    


  return router;

}
