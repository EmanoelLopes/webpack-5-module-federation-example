const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3003,
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
      name: 'content',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^17.0.2',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^17.0.2',
        },
        'styled-components': {
          singleton: true,
          requiredVersion: '^5.3.0',
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
