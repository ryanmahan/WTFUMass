var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

router.post('/create', function(req, res) {
  console.log('req recieved, ' + req.body)
  User.create({
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    fname: req.body.fname,
    lname: req.body.lname,
  }, function (err, doc) {
    if (doc === null){
      res.json({success: false, doc: doc})
    } else {
      res.json({success: true, doc: doc})
    }
  })
  
})

router.get('/login', function(req, res) {
  let username = req.query.username;
  let password = req.query.password;
  console.log('sent to login' + req.query.username)
  User.findOne({'username': username, 'password': password} , function (err, doc) {
    if(doc === null){
      res.json({success: false, doc: doc})
    } else {
      console.log(doc)
      res.json({success: true, doc: doc})
    }
  })
})

module.exports = router;