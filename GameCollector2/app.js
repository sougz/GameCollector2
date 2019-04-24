const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;



const admin = require('firebase-admin')
const serviceAccount = require('./gamecollector2-firebase-adminsdk-qbhlt-080059cfda.json')
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), databaseURL: 'https://gamecollector2.firebaseio.com'
})

let router = require('express').Router();


//var admin = require("firebase-admin");
app.use(express.static('public'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
 extended: true
 }));
//var serviceAccount = require("./serviceAccountKey.json");

function isAunthenticated(request, response, next){
  next()
}

app.get('/', function(req, res) {
  res.render('loginPage');

});

app.get('/registrationPage', function(req, res){
      res.render('registrationPage');
})

app.get('/homePage', function(req, res){
  res.render('homePage');
});

app.get('/loginPage', function(req, res){
  res.render('loginPage');
});

app.get('/index', function(req, res) {
  res.render('index');

});
app.get('/snake', isAunthenticated, function(req, res) {
  res.render('snake');
});

app.get('/connect4', function(req, res) {
  res.render('connect4');
});

app.get('/ticTacToe', function(req, res){
  res.render('ticTacToe');
});

app.get('/highscore', function(req, res){
      res.render('highscore');
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
module.exports = router;
