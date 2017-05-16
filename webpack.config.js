var path = require('path');

var contextPath = path.resolve(__dirname, 'app');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    entry: {
        javascript: './app/server.js'
    },
    target: 'node',
    output: {
        path: buildPath,
        filename: 'bundle.js',
        path: path.resolve(path.join(__dirname), 'build'),
    }
}