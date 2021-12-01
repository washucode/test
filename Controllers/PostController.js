var Post = require("../Models/Posts");
var bCrypt = require('bcrypt');
var express = require('express');
var router = express.Router(),
    mutler = require('multer')

// var usboy = require('express-busboy')
// var mypass = require('')
// const fileUpload = require("express-fileupload");
// app.use(fileupload());


exports.createNewPost = (req, res) => {
       
        var image = req.file
        console.log(image)
    
        Post.create({
            ...req.body,
            prevImage: `/posts/${image.filename}`
        }, (error, post) => {
            if(error){
                res.status(500).send(err);
                // res.redirect('/write');
            }
            res.status(200).json(post);
            console.log(post)
            // res.redirect('/admin')
            
        });
    }
    

  