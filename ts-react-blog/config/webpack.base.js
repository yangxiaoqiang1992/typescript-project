const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { say } = require("cfonts");
say("typescript", { font: "simple" });
module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].[hash].js", //配置输出文件
    // path: path.resolve(__dirname, "../dist"), //配置输出目录
    path: path.resolve("./dist"),
    // publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: "/node_modules",
      },
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: "/node_modules",
      },
    ],
  },
  resolve: {
    extensions: [".js", "ts", "jsx", "tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  devServer: {
    contentBase: "./dist",
    compress: true, //enable gzip compression
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      cache: false, // 不缓存
      inject: true,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
