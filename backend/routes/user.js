var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

// Add project to user's submitted projects
router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

//Test for is admin
router.get('/admin/:id', function (req, res) {
  if (req.params.id === undefined) 
    res.json({admin: false})
  User.findById(req.params.id, function (err, doc) {
    if(doc === undefined){
      res.json({admin: false})
    }
    else if(doc.isAdmin) {
      res.json({admin: true})
    } else {
      res.json({admin: false})
    }
  })
})

// DEPRECATED. GOOGLE SIGN-ON ONLY NOW
// router.post('/create', function(req, res) {
//   let status = true
//   User.findOne({username: req.body.username}, function (err, doc) {
//     if (doc !== null) {
//       res.json({success: false, reason: 'username'})
//       status = false
//       return
//     }
//     User.findOne({email: req.body.email}, function (err, doc) {
//       if (doc !== null) {
//         res.json({success: false, reason: 'email'})
//         status = false
//         return
//       }
//     })
//   })
//   .then (function () {
//     if (status) {
//       bcrypt.hash(req.body.password, 10, function(err, hash) {
//         User.create({
//           username: req.body.username,
//           password: hash,
//           isAdmin: false,
//           fname: req.body.fname,
//           email: req.body.email
//         }, function (err, doc) {
//           if (doc === null){
//             res.json({success: false, doc: doc})
//             return
//           } else {
//             res.json({success: true, doc: {
//               fname: doc.fname,
//               _id: doc._id
//             }})
//           }
//         })
//       })
//     }
//   })
// })

// Verify token passed by google log in function.
router.post('/verify', function(req, res) {
  // Pass token and client ID to google to confirm

  User.findOne({'email': req.body.email} , function (err, doc) {
    if (doc === null) { //None found with email
      User.create({
        isAdmin: false,
        fname: req.body.fname,
        email: req.body.email
      }, function (err, doc) {
        res.json({success: true, doc: {
          fname: doc.fname,
          _id: doc._id
        }})
      })
    } else { //One found with email
      res.json({success: true, doc: {
        fname: doc.fname,
        _id: doc._id
      }})
    }
  })
})

// DEPRECATED. GOOGLE SIGN-ON ONLY NOW
// router.get('/login', function(req, res) {
//   let username = req.query.username;
//   let password = req.query.password;
//   User.findOne({'username': username} , function (err, doc) {
//     console.log(doc)
//     console.log(err)
//     if (doc === null) {
//       res.json({success: false, reason: 'username'})
//       return
//     } else {
//       bcrypt.compare(password, doc.password, function(err, success) {
//         if(success) {
//           res.json({success: true, doc: {
//             fname: doc.fname,
//             _id: doc._id,
//             isAdmin: doc.isAdmin
//           }})
//         } else {
//           res.json({success: false, reason: 'password'})
//         }
//       })
//     }
//   })
// })

module.exports = router;