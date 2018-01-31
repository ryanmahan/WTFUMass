var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

router.post('/', function(req, res) {
  User.create({
    name: req.body.name,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    fname: req.body.fname,
    lname: req.body.lname,
  })
  
})

router.get('/', function(req, res) {
  //login method here
})

router.get('/current', function(req, res) {
  // TODO: return currently logged in user
})

module.exports = router;