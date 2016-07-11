var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var emails = require('./routes/emails');

var app = express();

mongoose.connect('mongodb://localhost/enron')
var db = mongoose.connection


db.on('error', function(msg) {
  console.log('Mongoose connection error ', msg)
})

db.once('open', function() {
  console.log('Mongoose connection established')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/emails', emails)

app.route('/chicken*')
  .get(genericResponse)
  .post(genericResponse)
  .put(genericResponse)
  .delete(genericResponse)

function genericResponse(req, res) {
  res.json({pretty: 'easy!'})
}

app.get('/chicken/*', chickenGetCallback)
app.post('/chicken/:id', chickenPostCallback)

var sampleData = [
{user: 2, name: 'zachhhhh'},
{user: 3, name: 'phil'}]

app.get('/chickenjson', function(req, res) {
  res.json(sampleData)
})

function chickenPostCallback(req, res) {
  res.send('woo! Post!')
}

function chickenGetCallback(req, res) {
  res.send('woo!')
}





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
