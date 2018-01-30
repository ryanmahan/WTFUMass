var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path       = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, OPTIONS");
    next();
  });

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var port = process.env.PORT || 3000;

var router = express.Router();


//Routes
var project = require('./routes/project')
app.use('/project', project)

var user = require('./routes/user')
app.use('/user', user)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
