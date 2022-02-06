const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 4000;

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: 'localhost',
    port: port,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'snake game',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /[\.js]$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
