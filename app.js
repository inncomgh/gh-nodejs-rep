const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();


const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		message: 'Response!!!'
	}));
});



