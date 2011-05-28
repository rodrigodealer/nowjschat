var http = require('http')
	, url = require('url')
	, fs = require('fs')
	, sys = require(process.binding('natives').util ? 'util' : 'sys')
	, server;
    
server = http.createServer(function(req, res) {
	// your normal server code
	var path = url.parse(req.url).pathname;
	switch (path) {
		case '/':
			res.writeHead(200, 'text/html');
			res.write('<h1>Welcome. Try the <a href="/cliente">chat</a> example.</h1>');
			res.end();
			break;
		case '/cliente':
			fs.readFile(__dirname + '/view' +  path + '.html', function(err, data){
				if (err) return send404(res);
					res.writeHead(200, 'text/html')
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

mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chat');

require('./model/user.js');

send404 = function(res){
	res.writeHead(404);
	res.write('404');
	res.end();
};

server.listen(8080);
console.log("Starting server in http://localhost:8080");

var nowjs = require('now');
var everyone = nowjs.initialize(server);

everyone.now.distributeMessage = function(nome, msg){
	everyone.now.receiveMessage(nome, msg);
}