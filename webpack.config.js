var path = require('path');

module.exports = {
    entry: './app/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "build/"
    }
};