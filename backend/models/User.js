var mongoose = require('mongoose')

var User = new mongoose.Schema({
    isAdmin: Boolean,
    username: String,
    fname: String,
    lname: String,
    password: String
})

module.exports = mongoose.model('User', User);