var User = require("../Models/Admin");
var bCrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
const bodyParser= require('body-parser');
const { Passport } = require("passport");
const passport = require("passport");

var flash = require('connect-flash');

module.exports= function(passport){
    passport.use('login', new LocalStrategy({
      passReqToCallback : true
    },
    function(req, username, password, done) { 
      // check in mongo if a user with username exists or not
      User.findOne({ 'username' :  username }, 
        function(err, user) {
          // In case of any error, return using the done method
          if (err)
            return done(err);
          // Username does not exist, log error & redirect back
          if (!user){
            console.log('User Not Found with username '+username);
            return done(null, false, 
                  req.flash('message', 'User Not found.'));                 
          }
          // User exists but wrong password, log the error 
          else if (user.password != password){
            console.log('Invalid Password');
            return done(null, false, 
                req.flash('message', 'Invalid Password'));
          }
    
         
        //   if (user.email != email){
        //     console.log('Invalid Email');
        //     return done(null, false, 
        //         req.flash('message', 'Invalid Email'));
        //   }
          // User and password both match, return user from 
          // done method which will be treated like success
          return done(null, user);
          
        }
      );
    }));
  
  
    // var isValidPassword = function(user, password){
    //   return bCrypt.compareSync(password, user.password);
  
  
  }
  