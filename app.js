

var http = require('http');
var server = http.createServer(app);

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var controllers = require('./controllers');

//Setup View Engine
app.set('view engine', 'vash');

//opt into services
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//set the public static resource folder
app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);

var port = process.env.port || 3000;

app.listen(port, function(){
    console.log('Gulp is running my app on port:' + port);
});