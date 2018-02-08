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
    votes: 1,
    votedBy: [req.body.user._id]
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

    let includes = false
    doc.votedBy.forEach(function (voted) {
      if(req.body.user._id == voted){
        includes = true
      }
    })

    if(includes) {
      res.json({success: false})
      return
    } else {
      let newVotes = doc.votes+1
      Project.findByIdAndUpdate(req.params.id, { 
        $set: { votes: newVotes },
        $push: { votedBy: req.body.user._id}
      },
        {new: true},
        function (err, updated) {
          res.json({success: true, doc: updated})
      })
    }
  })
})

//tag project
router.put('/tag/:id', function(req, res) {
  Project.findByIdAndUpdate(req.params.id, {
    $set: {tag: req.body.tag},
  },
    {new: true},
    function (err, doc) {
      res.json(doc)
    })
  })

module.exports = router;