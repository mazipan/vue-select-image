const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const buildingForLocal = () => {
  return (NODE_ENV === 'development');
};

const setPublicPath = () => {
  return '/vue-select-image/';
};

const config = {
  entry: {
    app: path.join(setPath('demo'), 'main.js')
  },
  output: {
    path: buildingForLocal() ? setPath('demo') : setPath('dist-demo'),
    publicPath: setPublicPath(),
    chunkFilename: '[name].bundle.js',
    filename: buildingForLocal() ? 'js/[name].js' : 'js/[name].[hash].js'
  },
  optimization:{
    runtimeChunk: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vue: {
          test: function(module) {
            return (
              module.resource &&
              module.resource.indexOf('node_modules/vue') >= 0
            );
          },
          name: "vue",
          chunks: "all",
          minChunks: 1,
          priority: -10
        },
        commons: {
          test: function(module) {
            return (
              module.resource &&
              module.resource.indexOf('node_modules') >= 0 &&
              module.resource.indexOf('node_modules/vue') === -1
            );
          },
          name: "vendors",
          chunks: "all",
          minChunks: 1,
          priority: -20
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolveLoader: {
    modules: [ 'node_modules' ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, ''),
      'demo': path.resolve(__dirname, 'demo'),
      'src': path.resolve(__dirname, 'src'),
      'icons': path.resolve(__dirname, 'node_modules/vue-ionicons/dist')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  mode: buildingForLocal() ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Demo Page',
      filename: 'index.html',
      template: path.join(setPath('demo'), 'index.ejs'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      environment: process.env.NODE_ENV,
      inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
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
  stats: {
    children: false,
  },
};
module.exports = config;
