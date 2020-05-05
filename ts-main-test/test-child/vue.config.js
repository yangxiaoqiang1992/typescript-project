const StatsPlugin = require("stats-webpack-plugin");
module.exports = {
  css: {
    extract: false,
  },
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    devtool: "none",
    output: {
      library: "vueChild",
      libraryTarget: "window",
    },
    plugins: [
      new StatsPlugin("stats.json", {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/],
      }),
    ],
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  },
};
