/*nodemon.oi
in your comand line type:
	npm install -g nodemon
if an error type : sudo chown -R $(whoami) /usr/local
	if error : sudo nmp install -g nodemon
type in command line:
	nodemon file.js

you can use postman to call your local host, or you can use your browser*/



var http = require('http');

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var onRequest = function(req, res){
	if(req.method === "GET"){
		res.statusCode = 200;

		res.setHeader('Content-Type', 'application/json');

// Allow any website to access this API
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

// Don’t allow scripts or iframes execution from domains we don't trust
		res.setHeader('X-XSS-Protection', '1; mode=block');
		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");
		
		res.end(JSON.stringify({message : messages[Math.floor(Math.random()*messages.length)]}));

	}

	if(req.method === "OPTIONS"){
		res.writeHead(200, {
  			'Connection': 'close',
  			'Content-Type': 'application/json',
  			'Access-Control-Allow-Origin': '*',
  			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});

		res.end();
	}

}


var port = 8887;



http.createServer(onRequest).listen(port);
console.log("i\'m watching you .... ", port)

/*var http = require('http');
var server = http.createServer();
var port = process.argv[2] || 8887;