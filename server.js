var express = require('express');
var redis = require('redis');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var portNumber = 3000;
var redisIP = '127.0.0.1';
var redisPort = 6379;
var redisClient = redis.createClient(redisPort, redisIP);
var http = require('http');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');

// API Section
app.listen(portNumber, function () {
    console.info('Server started at port ' + portNumber);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    log.error('Internal error(%d): %s', res.statusCode, err.message);
    res.send({ error: err.message });
    return;
});

app.get('/api', function (req, res) {
	console.log('api homepage fetched');
    res.send('MAL TEST API is running');
});

app.post('/api/userlist', function (req, res) {
	console.log('userlist called');
	var userName = req.userName;
	var url = 'http://myanimelist.net/malappinfo.php?u='+userName+'&status=all&type=anime';
	http.get(url, function(resp) {
		var malRawResponse = ''
		resp.on('data', function(chunk) {
			malRawResponse += chunk;
		});
		
		resp.on('end', function() {
			var malParsedResponse = JSON.stringify(malRawResponse);
			console.log(malParsedResponse);
			res.send(malParsedResponse);
		});
		
		/*
		resp.pipe(concat(function(buffer) {
			var str = buffer.toString();
			parser.parseString(str, function(err, result) {
				parsedResponse=result;
				console.log(result);
			});
		}));
		*/
	});

});

// Redis Section
redisClient.on('connect', function() {
    console.log('connected');
});

// Routing Section
router.use(function (req, res, next) {
    next();
});

router.post("/setMessage", function (req, res) {
    res.sendFile(path + "message.html");
});

router.get("/getMessage", function (req, res) {
    res.sendFile(path + "message.html");
});

router.get("/", function (req, res) {
    console.log("index.html fetched");
	res.sendFile(path + "index.html");
});

app.use("/", router);
