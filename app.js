const http = require('http');
const express = require('express');
const app = express();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(process.env.PORT || 8080);


console.log(process.env.PORT);

/* const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		message: 'Response!!!'
	}));
});
 */



