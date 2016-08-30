/*eslint-disable */
var path = require("path");
var rootDir = __dirname;
module.exports = {
    entry: {
        app: ["./app/index.js"]
    },
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loaders: ['babel'],
                test: /\.(js)$/,                
                exclude: /node_modules/
            },
            {
                loaders: ["style", "css", "sass"],
                test: /\.sass$/
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.ttf$|\.eot$/,
                loader: "file-loader?name=[path][name]-[hash:8].[ext]&context=" + rootDir
            }
        ]
    }
}
/*eslint-enable */
