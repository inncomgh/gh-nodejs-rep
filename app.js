const http = require('http');
const express = require('express');
const port = process.env.port || 3000;
const hostname  = '127.0.0.1';
const app = express();


const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		message: 'Response!!!'
	}));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


