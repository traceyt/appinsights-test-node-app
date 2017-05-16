var express = require('express')
var app = express();

const PORT = 5000;

app.get('/', function(req, res) {
    res.send('Server has started again!')
});

app.get('/getTest', function(req, res) {
    res.send('testing getTest')
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);