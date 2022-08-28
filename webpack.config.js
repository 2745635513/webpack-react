const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
  },
  entry: {
    index: "./src/index.tsx",
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      title: "部署本地webpack",
      template: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  output: {
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.js']
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ]
  }
};
