var path = require('path');

module.exports = {
    entry: './app/server.js',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: path.resolve(path.join(__dirname), 'build'),
        publicPath: "build/"
    },
    watch: true
};