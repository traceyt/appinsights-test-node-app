var path = require('path');

module.exports = {
    entry: './app/server.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    }
}