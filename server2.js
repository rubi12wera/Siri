

var http = require('http');

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandom(){
   
    var i = parseInt(Math.random()*(messages.length-1));
    return messages[i];
};

var onRequest = function(req, res){
var randomNum = Math.floor(Math.random() *(messages.length-1));
var message1 = messages[randomNum]
   
};
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
		res.end(JSON.stringify({message : message1}));

	}

	else if(req.method === "OPTIONS"){
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
