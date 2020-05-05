module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
      port: 8082,
      historyApiFallback: true,
    },
  },
};
