var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');

// Get all projects
router.get('/', function(req, res) {
  Project.find(function(err, doc) {
    res.json(doc)
  })
})

// Create new project
router.post('/', function(req, res) {
  Project.create({
    submittedBy: req.body.user,
    title: req.body.title,
    description: req.body.description,
    votes: 1
  }, function(err, doc) {
    console.log(doc)
    if (err) {
      res.send('failure');
    } else {
      res.json(doc);
    }
  })
})

// Vote on project
router.put('/votes/:id', function(req, res) {
  Project.findById(req.params.id, function (err, doc) {
    let newVotes = doc.votes+1
    //if has voted (i think the ._id logic needs to be there, this chunk needs testing)
    // if(doc.votedBy.includes(req.body.user._id)) {
    //   res.json({success: false})
    //   return
    // } else {
      Project.findByIdAndUpdate(req.params.id, { $set: { votes: newVotes }}, {new: true}, function (err, updated) {
        res.json({success: true, doc: updated})
      })
    //}
  })
})

module.exports = router;