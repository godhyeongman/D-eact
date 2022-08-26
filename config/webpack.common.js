const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'eRentronic',

  entry: { app: path.join(__dirname, '..', 'src', 'index.js') },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
    alias: { '@': path.resolve(__dirname, '..', 'src') },
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['> 0.2% in KR, not dead'] },
                debug: true,
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|webp|bmp|ttf|woff|otf|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
      base: '/',
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
};
