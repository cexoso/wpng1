/*eslint-disable */
var webpack = require("webpack");
var config = require("../webpack.config.js");
var opn = require("opn");
var WebpackDevServer = require("webpack-dev-server");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
    hot: true,
    contentBase: "./app"
});
server.listen(8080);
opn("http://localhost:8080");

/*eslint-enable */
