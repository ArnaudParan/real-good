var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = options => {
  return {
    mode: 'development',
    context: __dirname,

    entry:{
      app: './reactjs/app/app'

    },

    output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js",
    },

    plugins: [
      new BundleTracker({filename: './webpack-stats.json'}),
    ],
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    externals: {
      googleMaps: "window.google"
    }

  };
};
