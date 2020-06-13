const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const buildingForLocal = () => {
  return (NODE_ENV === 'development');
};

const setPublicPath = () => {
  return buildingForLocal() ? '/' : '/vue-select-image/';
};

const extractHTML = new HtmlWebpackPlugin({
  title: 'History Search',
  filename: 'index.html',
  inject: true,
  template: path.join(__dirname, 'demo/index.ejs'),
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true
  },
  environment: process.env.NODE_ENV
});


const config = {
  entry: {
    app: path.join(setPath('demo'), 'main.js')
  },
  output: {
    path: buildingForLocal() ? path.resolve(__dirname) : setPath('dist-demo'),
    publicPath: setPublicPath(),
    filename: buildingForLocal() ? 'js/[name].js' : 'js/[name].[hash].js'
  },
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
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
      'src': path.resolve(__dirname, 'src')
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
    extractHTML,
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};
module.exports = config;
