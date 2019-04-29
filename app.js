const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(PORT, ()=> console.log(`Listening on ${ PORT }`));


console.log(process.env.PORT);

/* const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		message: 'Response!!!'
	}));
});
 */



