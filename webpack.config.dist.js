var webpack = require('webpack')
var path = require('path')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  entry: './src/main-dist.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'vue-select-image.js',
    library: 'VueSelectImage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  externals: {
    'vue': 'Vue'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `vue-select-image v.${npm.version}`
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
