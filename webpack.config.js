/*eslint-disable */
var webpack = require("webpack");
var path = require("path");
var env = require("./bin/env");
var rootDir = __dirname;
var loaders = [{
	loaders: ['babel'],
	test: /\.(js)$/,
	exclude: /node_modules/
}, {
	loaders: ["style", "css?sourceMap", "sass?sourceMap"],
	test: /\.scss$/
}, {
	test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.ttf$|\.eot$/,
	loader: "file-loader?name=[path][name]-[hash:8].[ext]&context=" + rootDir
}];
var plugins = [];
if (env.env === "build") {
	Array.prototype.push.apply(plugins,[
		new webpack.optimize.UglifyJsPlugin({})
	])
} else {
	Array.prototype.push.apply(plugins,[
		new webpack.HotModuleReplacementPlugin()
	])
}
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
        loaders: loaders
    },
    plugins: plugins,
	resolve: {
        alias: {
			"resource": path.join(__dirname, "./app/resource")
        }
    }
}
/*eslint-enable */
