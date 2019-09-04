import http from 'http';
import express from 'express';

var app = express();
console.log('loaded all router modules');
require('./router')(app);
app.use(express.json());

var port = 8000;
app.set('port', port);
console.log('listening on :http://localhost:' + port);

var server = http.createServer(app);
server.listen(port);

module.exports = app;