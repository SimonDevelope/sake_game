const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [path.resolve(__dirname, "src/js")],
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "style/style.scss" }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve("./public"),
  },
};
