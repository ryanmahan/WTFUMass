var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var User = require('../models/User.js');

const {OAuth2Client} = require('google-auth-library');
CLIENT_ID = '449186400081-j47ll0hkuftmp0qv39n1k2vmduco7e0b.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);


router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

router.post('/create', function(req, res) {
  let status = true
  User.findOne({username: req.body.username}, function (err, doc) {
    if (doc !== null) {
      res.json({success: false, reason: 'username'})
      status = false
      return
    }
    User.findOne({email: req.body.email}, function (err, doc) {
      if (doc !== null) {
        res.json({success: false, reason: 'email'})
        status = false
        return
      }
    })
  })
  .then (function () {
    if (status) {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        User.create({
          username: req.body.username,
          password: hash,
          isAdmin: false,
          fname: req.body.fname,
          email: req.body.email
        }, function (err, doc) {
          if (doc === null){
            res.json({success: false, doc: doc})
            return
          } else {
            res.json({success: true, doc: {
              fname: doc.fname,
              _id: doc._id
            }})
          }
        })
      })
    }
  })
})
  
router.post('/verify', function(req, res) {
  console.log('running')
  let token = req.body.token;
  console.log(token)
  client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  }).verify().catch(console.error);
  const payload = ticket.getPayload();
  console.log(payload)
  res.json(payload)
  const userid = payload['sub'];
  
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
    }
  })
})

module.exports = router;