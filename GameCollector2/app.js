/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;*/



//old app.js code
//code copied from nodejs.org/about to run the server
/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Kenny can go suck a dick!!!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

let router = require('express').Router();

//var admin = require("firebase-admin");
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
 extended: true
 }));
//var serviceAccount = require("./serviceAccountKey.json");


app.get('/', function(req, res) {
  res.render('homePage');
  //res.send('Kenny can go suck a dick!!!!!\n');
});
app.get('/index', function(req, res) {
  res.render('index');
  //res.send('Kenny can go suck a dick!!!!!\n');
});
/*app.get('/dashboard', function(req, res) {
  
  res.render('dashboard');
});*/

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
module.exports = router;
