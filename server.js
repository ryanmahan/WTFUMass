// Requires for build
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
const serveStatic = require('serve-static')

// Routes required to access differnt endpoints - easier if used within variable as such
var user = require('./backend/routes/user');
var project = require('./backend/routes/project');
// app uses express as the server. Should be familiar.
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');

//Setting up the User Endpoint
app.use('/user', user);

//Setting up the Systems Endpoint
app.use('/project', project);

// Mongoose client with bluebird. Not really sure what bluebird is but it works with the build
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//export badboy back to html/webpage
module.exports = app;