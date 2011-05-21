var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , sys = require(process.binding('natives').util ? 'util' : 'sys')
  , server;
    
server = http.createServer(function(req, res){
  // your normal server code
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>Welcome. Try the <a href="/cliente.html">chat</a> example.</h1>');
      res.end();
      break;
    case '/cliente.html':
      fs.readFile(__dirname + path, function(err, data){
        if (err) return send404(res);
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
        res.write(data, 'utf8');
        res.end();
      });
      break;
	case '/style.css':
      fs.readFile(__dirname + path, function(err, data){
        if (err) return send404(res);
        res.writeHead(200, 'text/css')
        res.write(data, 'utf8');
        res.end();
      });
      break;
      
    default: send404(res);
  }
});

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(8080);

var nowjs = require('now');
var everyone = nowjs.initialize(server);

everyone.now.distributeMessage = function(nome, msg){
  everyone.now.receiveMessage(nome, msg);
}