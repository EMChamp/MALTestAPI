var express = require('express');
var redis = require('redis');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = __dirname + '/views/';
var portNumber = 3000;
var redisIP = '127.0.0.1';
var redisPort = 6379;
var redisClient = redis.createClient(redisPort, redisIP);
var http = require('http');
var exec = require("child_process").exec;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// API Section
app.listen(portNumber, function () {
    console.info('Server started at port ' + portNumber);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    log.error('Internal error(%d): %s', res.statusCode, err.message);
    res.send({ error: err.message });
    return
});

app.get('/api', function (req, res) {
    res.send('MAL TEST API is running');
});

app.post('/api/userlist', function (req, res) {
	console.log('userName is ' + req.body.userName);
	exec('curl -m 5 http://myanimelist.net/malappinfo.php?u='+req.body.userName+'&status=all&type=anime', function (err, stdout, stderr) {
		res.send(stdout);
	}); 

	/*
	http.get(url, function (resp) {
		resp.on('data', function (chunk) {
			malRawResponse += chunk;
		});

		resp.on('end', function () {
			console.log(malRawResponse);
			res.send(malRawResponse);
		});
	});
	*/
});

// Redis Section
redisClient.on('connect', function () {
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
