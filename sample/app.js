const http = require('http');
const express = require('express');

var app = express();
console.log('loaded all router modules');
require('./router')(app);
app.use(express.json());

var port = 8000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

module.exports = app;
