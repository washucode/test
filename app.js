'use strict';

const app = require('./express/server');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 4000;
var mypass =  require('./passport/passport')
var UserController = require('./Controllers/UserController')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
const html2pug = require('html2pug');
// var multer = require('multer')

var expressSession = require('express-session')
const bodyParser= require('body-parser');
const { session } = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
// const fileUpload = require("express-fileupload");
app.use(cookieParser());
app.use(express.static( 'assets'));
// app.use(multer({ dest: './assets/posts'}))

//call routes in
// myapp(app)
// app.use(fileUpload());
app.use(expressSession({
  secret: 'keyboard cat',
  
}));


app.use(passport.initialize());
app.use(passport.session());


//call passport function 
// mypass(passport)


app.use(flash());


var User = require('./Models/Admin');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//handle permissions
var isAuthenticated = function (req, res, next) {
	
	if (req.isAuthenticated())
		return next();
	// redirect him to login page if not authenticated
	res.redirect('/login');
}

require("./config/db");


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//render static pages

app.get('/', (req, res) => {
  res.render('index');
  
});

app.get('/blog', (req, res) => { 
  res.render('Blog/blog'); 
});

app.get('/spage', (req, res) => { 
  res.render('Blog/singlepage'); 
});


//authentication
var otherRoutes = require('./routes/routes')(passport)
app.use('/',otherRoutes)




//logging in
// app
//   .route("/loggin")
//   .post( passport.authenticate('login', {
// 		successRedirect: '/admin',
// 		failureRedirect: '/login',
// 		failureFlash : true  
// 	}));


//render login page
// app.get('/login', (req, res) => { 
//   res.render('Blog/login'); 
// });



/*------------------------------------------------------------------------------------------------------
----------------------------------Admin Views-----------------------------------------------------------*/


app.get('/write',isAuthenticated, (req, res) => {
  // console.log(req.body) //Line 9
  res.render('Blog/write', { user: req.user }); //Line 10
});//Line 1


app.post('/postblog', (req, res) => {
  console.log(req.body) //Line 9
  // res.render('Blog/write', { user: req.user }); //Line 10
});//Line 1

// app.get('/admin',isAuthenticated, (req, res) => { //Line 9
//   res.render('Blog/adminhome', { user: req.user });
  
// });//Line 1



app.post("/preview",(req,res)=>{
  console.log(req.body)
})






// catch 404 and forward to error handler

// app
//   .route('/profile/:id')
//   .put(UserController.updateAdmin)


app.use(function(req, res, next) {
  res.status(404);
  res.render('404');

});  

// app.get('/getAdmins',)
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  
  
});


app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});


// module.exports = app;
