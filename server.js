var http = require('http');
var port = process.env.PORT || 5000;
var numCPUs = require('os').cpus().length;
var cluster = require('cluster');

if (cluster.isMaster) {
  console.log("numCPUs", numCPUs);
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
}else{
  http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Heroku Node !');
  }).listen(port);
}

