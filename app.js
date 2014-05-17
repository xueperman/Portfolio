var express  = require('express');
var twig = require('twig');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/index');
var portfolio = express();

//setup templating system
portfolio.set('views', __dirname + '/public/templates');
portfolio.set('view engine', 'twig');

//Setup a static directory
portfolio.use(express.static(__dirname+'/public'));

//Set up middleware 
portfolio.use(bodyParser());

portfolio.use(router);

portfolio.listen(3000, function() {
	console.log('listening to port 3000');
});