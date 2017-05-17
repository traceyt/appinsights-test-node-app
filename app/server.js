// setup for app insights
const appInsights = require("applicationinsights");
appInsights.setup("0dccd139-e558-41b0-838c-fd892a3b0b16");
appInsights.start();

var express = require('express')
var app = express();

(function() {

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();

app.get('/', function(req, res) {
    res.send('Server has started again!');
});

app.get('/getTest', function(req, res) {
    appInsights.client.trackRequest(req, res);
    res.send('the getTest rest api has been called this many times ' + count++);
});

app.listen(5000);
console.log('Running on http://localhost:' + 5000);