var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

let currentUser = null

router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

router.post('/create', function(req, res) {
  console.log('req recieved, ' + req.body)
  User.create({
    name: req.body.name,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    fname: req.body.fname,
    lname: req.body.lname,
  }, function (err, doc) {
    if (doc === null){
      res.json({success: false, doc: doc})
    } else [
      res.json({success: true, doc: doc})
    ]
  })
  
})

router.get('/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  User.find({username: username, password:password}, function (err, doc) {
    if(doc === null){
      res.json({success: false, doc: doc})
    } else {
      res.json({success: true, doc: doc})
      currentUser = doc
    }
  })
})

router.get('/current', function(req, res) {
  // TODO: return currently logged in user
})

module.exports = router;