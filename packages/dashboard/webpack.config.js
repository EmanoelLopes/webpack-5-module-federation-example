const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  ModuleFederationPlugin
} = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      remotes: {
        '@layout': 'layout@http://localhost:3001/remoteEntry.js',
        '@library': 'library@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^17.0.2',
        },
        'react-dom': {
          singleton: true
        },
        'react-router-dom': {
          singleton: true
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};