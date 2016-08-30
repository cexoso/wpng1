/*eslint-disable */
var webpack = require("webpack");
var path = require("path");
var rootDir = __dirname;
module.exports = {
        entry: {
            app: ["./app/index.js"]
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
		devtool: "source-map",
        module: {
            loaders: [{
                loaders: ['babel'],
                test: /\.(js)$/,
                exclude: /node_modules/
            }, {
                loaders: ["style", "css?sourceMap", "sass?sourceMap"],
                test: /\.scss$/
            }, {
                test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.ttf$|\.eot$/,
                loader: "file-loader?name=[path][name]-[hash:8].[ext]&context=" + rootDir
            }]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
    /*eslint-enable */
