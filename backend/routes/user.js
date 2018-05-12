var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

const {OAuth2Client} = require('google-auth-library');
CLIENT_ID = '449186400081-j47ll0hkuftmp0qv39n1k2vmduco7e0b.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

// Add project to user's submitted projects
router.put('/project/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push: {projects: req.body.project }})
})

//Test for is admin
router.get('/admin/:id', function (req, res) {
  if (req.params.id === undefined) 
    res.json({admin: false})
  User.findById(req.params.id, function (err, doc) {
    if(doc.isAdmin) {
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
  async function verify() {
    token = req.body.token
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  
    });
    const payload = ticket.getPayload();

    // Find existing user with specific sub passed from google
    User.findOne({'sub': payload['sub']} , function (err, doc) {
      console.log(doc)
      console.log(err)
      if (doc === null) { //None found with sub ID
        User.create({
          sub: payload['sub'],
          isAdmin: false,
          fname: payload['given_name'],
          email: payload['email']
        }, function (err, doc) {
          console.log(doc)
          res.json({success: true, doc: {
            fname: doc.fname,
            _id: doc._id
          }})
        })
      } else { //One found with sub
        res.json({success: true, doc: {
          fname: doc.fname,
          _id: doc._id
        }})
      }
    })
  }
  verify().catch(console.error());
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