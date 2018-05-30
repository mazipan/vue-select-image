const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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

const extractHTML = new HtmlWebpackPlugin({
  title: 'History Search',
  filename: 'index.html',
  inject: true,
  template: setPath('/demo/index.ejs'),
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
    }
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
    extractHTML,
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    }),
    new VueLoaderPlugin()
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
          'vue-style-loader',
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
  }
};
module.exports = config;
