const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const config = {
  entry: {
    app: './src/plugin.js'
  },
  output: {
    library: "VueSelectImage",
    libraryTarget: "umd",
    filename: "vue-select-image.js",
    umdNamedDefine: true,
  },
  optimization:{
    runtimeChunk: false,
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolveLoader: {
    modules: [setPath('node_modules')]
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
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "vue-select-image.css"
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
