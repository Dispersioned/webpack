const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function optimization() {
  if (isProd)
    return {
      minimize: true,
      minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    };

  return {};
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    compress: true,
    hot: isDev,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: { collapseWhitespace: isProd },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/assets'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|woff2|eot)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.jsx$/i,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
    ],
  },
};
