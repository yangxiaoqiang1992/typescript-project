const config = require("./webpack.base");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(config, {
  mode: "production",
  devtool: false,
});
