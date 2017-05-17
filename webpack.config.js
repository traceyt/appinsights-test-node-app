var path = require('path');
var Webpack = require('webpack');

module.exports = {
    entry: './app/server.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    }
}