/*eslint-disable */
var webpack = require("webpack");
var path = require("path");
var env = require("./bin/env");
var rootDir = __dirname;
var HtmlWebpackPlugin = require("html-webpack-plugin");
var loaders = [{
	loaders: ['babel'],
	test: /\.(js)$/,
	exclude: /node_modules/
}, {
	loaders: ["style", "css?sourceMap", "resolve-url","sass?sourceMap"],
	test: /\.scss$/
},{
	test: /\.less$/,
	loaders: ["style","css","less"]
},{
	loaders: ["style", "css?sourceMap"],
	test: /\.css$/
}, {
	test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$/,
	loader: "file-loader?name=[path][name]-[hash:8].[ext]&context=" + rootDir
}];
var plugins = [new HtmlWebpackPlugin({
	template: "./app/index.html"
})];
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
        filename: "[name]-[hash:8].js"
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
