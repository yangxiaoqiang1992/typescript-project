const config = require("./webpack.base");
const merge = require("webpack-merge");
module.exports = merge(config, {
  mode: "production",
  devtool: false,
});
