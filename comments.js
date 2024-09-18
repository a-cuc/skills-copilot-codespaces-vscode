// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments.js');

// Create server
var server = http.createServer(function (req, res) {
    // Get path
    var pathname = url.parse(req.url).pathname;})