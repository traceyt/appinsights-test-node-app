var path = require('path');
var webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = {
    entry: ["webpack/hot/poll?1000", "./app/dev"],
    watch: true,
    target: 'node',
    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],
    output: {
        path: path.join(__dirname, './.build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
        ],
    },
    plugins: [
        new StartServerPlugin({
            name: "bundle.js",
            nodeArgs: ['--inspect'], // allow debugging
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": { BUILD_TARGET: JSON.stringify("bundle.js") },
        })
    ]
};