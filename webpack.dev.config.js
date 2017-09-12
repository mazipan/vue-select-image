var path = require('path');
var webpack = require('webpack');
var npm = require("./package.json");

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './demo/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/vue-select-image',
    filename: 'dev.bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    quiet: true,
    compress: true,
    port: 4000,
    publicPath: "/vue-select-image/dist/",
    open: true,
    openPage: 'vue-select-image'
  },
  externals: {
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `VueSelectImage v.${npm.version}\nIrfan Maulana (https://github.com/mazipan)`
    })
  ]
}
