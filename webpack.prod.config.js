var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

const APP_DIR = path.resolve(__dirname, 'reactjs/app')
const BUILD_DIR = path.resolve(__dirname, 'static/bundles')
const ROOT_DIR = path.resolve(__dirname)

//TODO minify and compress

module.exports = options => {
  return {
    mode: 'production',
    context: __dirname,

    entry:{
      app: APP_DIR + '/app'

    },

    output: {
      path: BUILD_DIR,
      filename: "[name]-[hash].js",
    },

    plugins: [
      new BundleTracker({filename: ROOT_DIR + '/webpack-stats.json'}),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          use: ['babel-loader']
        },
        {
          test: /\.tsx?$/,
          include: APP_DIR,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              }
            }
          ]
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    externals: {
      googleMaps: "window.google"
    }

  };
};
