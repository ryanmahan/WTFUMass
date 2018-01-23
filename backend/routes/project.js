var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');

module.exports = router;

// Get all projects
router.get('/', function(res, req, body) {
  Project.find(function(err, doc) {
    if (err) return handleError(err)
    res.json(doc)
  })
})