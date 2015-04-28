/**
 * Module dependencies.
 */

var express = require('express');
var jade = require('jade');
//load gulp for running simple test
var gulp = require('gulp');

// Path to our public directory

var pub = __dirname + '/public';

// setup middleware

var app = express();
	app.use(express.static(pub));

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

function User(name, email) {
  this.name = name;
  this.email = email;
}

// Dummy users
var users = [
    new User('john', 'johnshew')
  , new User('jeff', 'boyofgreen')
  , new User('justin', 'justingarret')
];

app.get('/', function(req, res){
  res.render('users', { users: users });
});




  app.listen(3000);
  console.log('Express started on port 3000');

