const StatsPlugin = require("stats-webpack-plugin");
module.exports = {
  css: {
    extract: false, //不打包css为单独文件
  },
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    devtool: "none", //去掉打包的map文件
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
    // 开发环境跨域问题
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  },
};
