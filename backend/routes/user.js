var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var User = require('../models/User.js');


router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

router.post('/create', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User.create({
      username: req.body.username,
      password: hash,
      isAdmin: req.body.isAdmin,
      fname: req.body.fname,
        email: req.body.email
    }, function (err, doc) {
      if (doc === null){
        res.json({success: false, doc: doc})
      } else {
        res.json({success: true, doc: {
          fname: doc.fname,
          _id: doc._id
        }})
      }
    })
    })
  })
})
  
router.get('/login', function(req, res) {
  let username = req.query.username;
  let password = req.query.password;
  User.findOne({'username': username} , function (err, doc) {
    console.log(doc)
    console.log(err)
    if (doc === null) {
      res.json({success: false, reason: 'username'})
      return
    } else {
    bcrypt.compare(password, doc.password, function(err, success) {
      if(success) {
        res.json({success: true, doc: {
          fname: doc.fname,
          _id: doc._id,
          isAdmin: doc.isAdmin
        }})
      } else {
          res.json({success: false, reason: 'password'})
      }
    })
  })
})

module.exports = router;