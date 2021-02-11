// webpack.config.js is special file for webpack reference
// webpack runs on node.js!
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // entry point does
  // 1. first file to execute
  // 2. start module building process
  entry: './src/index.js',
  output: {
    // __dirname is node constant variable
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  mode: 'development',
  // loader, module, rules system of webpack
  module: {
    rules: [
      {
        // babel-loader gives some pre-process
        use: 'babel-loader',
        test: /¥.js$/,
      },
      // setup for mini-css-extract-plugin
      // https://numb86-tech.hatenablog.com/entry/2018/10/24/221130
      {
        // from right to left!!!
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // setup for bundle css and js
      // {
      //   // from right to left!!!
      //   use: ['style-loader', 'css-loader'],
      //   test: /\.css$/,
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'style.css' })],
};

module.exports = config;
