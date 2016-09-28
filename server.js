var express = require('express');
var redis = require('redis');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var portNumber = 9001;
var redisIP = '127.0.0.1';
var redisPort = 6379;
var redisClient = redis.createClient(redisPort, redisIP);
var https = require('https');
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
    res.send('MAL TEST API is running');
});

app.get('/users', function (req, res) {
	var url = 'https://myanimelist.net/malappinfo.php?u=domokun1134&status=all&type=anime';
	https.get(url, function(resp) {

    resp.on('error', function(err) {
      console.log('Error while reading', err);
    });

    resp.pipe(concat(function(buffer) {
      var str = buffer.toString();
      parser.parseString(str, function(err, result) {
        console.log('Finished parsing:', err, result);
      });
    }));
  	res.send(result);
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
    res.sendFile(path + "index.html");
    console.log("HELLO WORLD");
});

app.use("/", router);
