const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./theme');

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

// const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
//   beautify: false,
//   mangle: {
//     screw_ie8: true,
//   },
//   compress: {
//     screw_ie8: true,
//   },
//   comments: false,
// });

module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: path.resolve(__dirname, 'public'),
    proxy: {
      '/api': {
        target: 'http://117.78.28.112:3000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      '/video': {
        target: 'http://117.78.28.237:15301/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/video': '' },
      },
    },
  },
  entry: [
    './theme.js',
    'normalize.css/normalize.css',
    'react-hot-loader/patch',
    path.join(__dirname, '/src/index.jsx'),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                javascriptEnabled: true,
                modifyVars: theme,
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build'),
  },
  devtool: 'source-map',
  plugins: dev
    ? [
      new ExtractTextPlugin('[name].css', {
        disable: false,
        allChunks: true,
      }),
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]
    : [
      new ExtractTextPlugin('[name].css', {
        disable: false,
        allChunks: true,
      }),
      HTMLWebpackPluginConfig,
      DefinePluginConfig,
        // UglifyJsPluginConfig,
    ],
};
