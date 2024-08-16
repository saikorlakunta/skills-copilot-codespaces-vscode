// Create web server
// Create a simple web server
// Load the http module
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = require('./comments.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
  });
});

app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});