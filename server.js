// Requires for build
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
const serveStatic = require('serve-static')


// Routes required to access differnt endpoints - easier if used within variable as such
var user = require('./backend/routes/user');
var project = require('./backend/routes/project');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');

app.use('/user', user);
app.use('/project', project);


var mongoose = require('mongoose');
mongoose.connect('mongodb://ryan:ryanp@ds229648.mlab.com:29648/wtfumass')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


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

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %s:%d', server_port);
});

module.exports = app;