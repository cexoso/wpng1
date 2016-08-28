var webpack = require("webpack");
var config = require("../webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
    hot: true,
    contentBase: "./app"
});
server.listen(8080);
