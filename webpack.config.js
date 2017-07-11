var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,

module: {
    rules: [
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      }
    ]
  },
plugins: [
    new CopyWebpackPlugin([{
      from: './src/index.html'
    }])
  ]

};