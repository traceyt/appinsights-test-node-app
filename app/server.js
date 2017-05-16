// setup for app insights
const appInsights = require("applicationinsights");
appInsights.setup("0dccd139-e558-41b0-838c-fd892a3b0b16");
appInsights.start();

var express = require('express')
var app = express();

const PORT = 5000;
var count = 0;

app.get('/', function(req, res) {
    res.send('Server has started again!');
});

app.get('/getTest', function(req, res) {
    appInsights.client.trackRequest(req, res);
    res.send('the getTest rest api has been called ' + count++);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);