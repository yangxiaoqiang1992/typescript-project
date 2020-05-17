const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
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
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: {
          //使用ts-import-plugin 来处理antd的按需加载
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "antd",
                libraryDirectory: "lib",
                style: "css",
              }),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        },
      },
      {
        test: /\.(css|less)?$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|jpeg)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    // },
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    // compress: true, //enable gzip compression
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
    // new UglifyJsPlugin({
    //   sourceMap: true,
    // }),
  ],
};
