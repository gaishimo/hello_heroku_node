var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello Heroku Node !');
}).listen(port);