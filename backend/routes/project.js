var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');



// Get all projects
router.get('/', function(req, res) {
  Project.find(function(err, doc) {
    if (err) return handleError(err)
    res.json(doc)
  })
})

// Create new project
router.post('/', function(req, res) {
  console.log(req.body)
  Project.create({
    submittedBy: req.body.name,
    submittedEmail: req.body.email,
    title: req.body.title,
    description: req.body.description
  }, function(err, doc) {
    console.log(doc)
    if (err) {
      res.send('failure');
      return handleError(err)
    } else {
      res.json(doc);
    }
  })
})

module.exports = router;